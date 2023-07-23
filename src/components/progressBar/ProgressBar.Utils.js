import { useState } from 'react';

const ProgressBarUtils = () => {

    const [progress, setProgress] = useState(0);

    const handleProgressPercentage = (totalMembers, todaysCount) => {//handles progress percentage
        const progressPercentage = (todaysCount / totalMembers) * 100;
        setProgress(progressPercentage);

        let currentValue = 0;
        const increment = progressPercentage / 100;
        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= progressPercentage) {
            currentValue = progressPercentage;
            clearInterval(interval);
          }
          setProgress(currentValue);
        }, 10);

        return () => {
          clearInterval(interval);
        };
    };

    return {
        progress,
        handleProgressPercentage
    };
}

export default ProgressBarUtils;