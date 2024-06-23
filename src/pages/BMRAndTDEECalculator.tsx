import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from 'SRC/components/layouts/MainLayout';
import CalculatorForm from 'SRC/components/BMRAndTDEECalculator/CalculatorForm';
import { Button } from '@pinkymini/nutriso-components-new';

interface CalculateResult {
  bmr: number;
  tdee: number;
}

const BMRAndTDEECalculator = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [calculateResult, setCalculateResult] = useState<CalculateResult | null>(null);

  const backToRecalculate = () => {
    setCurrentStep(1);
    setCalculateResult(null);
  };
  return (
    <MainLayout>
      <div className="flex flex-col w-[650px] overflow-y-auto bg-primary-100 rounded-lg p-7 drop-shadow-lg">
        <h1 className="text-center text-2xl font-medium">{t('main_Calculator_Title_Text')}</h1>
        {currentStep === 1 ? (
          <CalculatorForm setCurrentStep={setCurrentStep} setCalculateResult={setCalculateResult} />
        ) : (
          <div className="mt-5 flex flex-col h-full">
            <h2 className="text-xl font-normal">{t('main_CalculateResult_Text')}</h2>
            <div className="mt-3 flex flex-col h-full">
              <p>
                {t('main_BMR_Text')}：{calculateResult?.bmr}
              </p>
              <p>
                {t('main_TDEE_Text')}：{calculateResult?.tdee}
              </p>
              {/* // TODO */}
              <div>建議內容</div>
              <Button className="w-[88px] mt-[auto]" onClick={backToRecalculate}>
                {t('main_Recalculate_Button_Text')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default BMRAndTDEECalculator;
