import { Header } from "../../../../Header";
import { feedbackTypes, FeedbackType } from "../../../../Widget/CardButton/feedbackTypes";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>    
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className="bg-[#3f3f46] rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-[#8257e5] focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            type="button"
          >
            <img src={value.images.src} alt={value.images.alt} />
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
    </>
  );
}
