import { useState } from "react";
import { FeedbackType } from "./feedbackTypes";
import { FeedbackTypeStep } from "../WidgetForm/Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "../WidgetForm/Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "../WidgetForm/Steps/FeedbackSuccessStep";

export const CardButton = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <>
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartedRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
    </>
  );
};
