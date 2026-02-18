import { useEffect, useState } from "react";
import TextInputCard from "../../common/TextInputCard";
import SummaryOptions from "../../common/SummaryOptions";
import ActionButton from "../../common/ActionButton";
import ResultCard from "../../common/ResultCard";
import StatsBar from "../../common/StatsBar";
import HeroTitle from "../../common/HeroTitle";
import LoadingOverlay from "../../common/LoadingOverlay";

import { useSummarize } from "../../../hooks/useSummarize";
import { modelService } from "../../../services/model.service";
import type { SummaryFormat, SummaryRatio } from "../../../types/summarize";
import type { ModelOption } from "../../../types/model";

export default function TextSummaryPage() {
  const [models, setModels] = useState<ModelOption[]>([]);
  const [model, setModel] = useState<number | null>(null);
  const [ratio, setRatio] = useState<SummaryRatio>("30%");
  const [format, setFormat] = useState<SummaryFormat>("paragraph");
  const [inputText, setInputText] = useState("");

  const MAX_CHAR_LIMIT = 5000;

  const { run, reset, loading, summary, executionTimeMs, error } =
    useSummarize();

  useEffect(() => {
    const loadModels = async () => {
      const data = await modelService.getSummaryModels();
      setModels(data);
      setModel(data[0]?.id ?? null);
    };

    loadModels();
  }, []);

  const resultFormat: "paragraph" | "bullet" =
    format === "bullet" ? "bullet" : "paragraph";

  const bullets = format === "bullet" ? summary.split("។").filter(Boolean) : [];

  const originalCharCount = inputText.length;
  const summarizedCharCount = summary.length;
  const accuracy =
    originalCharCount > 0
      ? Math.round((summarizedCharCount / originalCharCount) * 100)
      : 0;

  return (
    <div className="max-w-6xl mx-auto space-y-6 relative">
      {/* Hero */}
      <HeroTitle title="ឧបករណ៍បញ្ញាសិប្បនិម្មិតសង្ខេបអត្ថបទ" />
      {loading && <LoadingOverlay />}
      {/* Two-panel layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* LEFT — INPUT */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col h-full">
          {/* Top */}
          <div className="flex-1 space-y-4">
            <TextInputCard
              value={inputText}
              onChange={setInputText}
              maxLength={MAX_CHAR_LIMIT}
              onClear={() => {
                setInputText("");
                reset();
              }}
            />

            <SummaryOptions
              models={models}
              model={model}
              ratio={ratio}
              format={format}
              onModelChange={setModel}
              onRatioChange={setRatio}
              onFormatChange={setFormat}
            />
          </div>

          {/* Bottom button */}
          <div className="pt-4 flex justify-start items-center gap-4">
            <ActionButton
              label={loading ? "កំពុងដំណើរការ..." : "សង្ខេបអត្ថបទ"}
              isActive={
                inputText.length > 0 &&
                inputText.length <= MAX_CHAR_LIMIT &&
                !loading
              }
              onClick={() => {
                if (!model || inputText.length > MAX_CHAR_LIMIT) return;
                run(inputText, model);
              }}
            />
            {inputText.length > MAX_CHAR_LIMIT && (
              <p className="text-red-600 text-sm font-battambang">
                ⚠️ អត្ថបទលើសពីដែនកំណត់ ({MAX_CHAR_LIMIT})
              </p>
            )}
          </div>
        </div>

        {/* RIGHT — RESULT */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col h-full">
          {/* Top */}
          <div className="flex-1 space-y-3">
            <ResultCard
              title="លទ្ធផលសង្ខេប"
              format={resultFormat}
              paragraphText={summary}
              bulletItems={bullets}
              executionTimeMs={executionTimeMs}
            />
            {error && <p className="text-red-500 text-sm italic">{error}</p>}
          </div>

          {/* Bottom button */}
          <div className="pt-4 flex justify-between">
            {/* Format Switch */}
            <div className="flex gap-2">
              <ActionButton
                label="អត្ថបទ"
                isActive={format === "paragraph"}
                onClick={() => setFormat("paragraph")}
              />
              <ActionButton
                label="ចំណុច"
                isActive={format === "bullet"}
                onClick={() => setFormat("bullet")}
              />
            </div>
            <ActionButton
              label="ចម្លងលទ្ធផល"
              isActive={summary.length > 0}
              onClick={() => navigator.clipboard.writeText(summary)}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <StatsBar
        stats={[
          { label: "អក្សរដើម", value: `${originalCharCount} អក្សរ` },
          { label: "អក្សរសង្ខេប", value: `${summarizedCharCount} អក្សរ` },
          { label: "ភាពសង្ខេប", value: `${accuracy}%` },
        ]}
      />
    </div>
  );
}
