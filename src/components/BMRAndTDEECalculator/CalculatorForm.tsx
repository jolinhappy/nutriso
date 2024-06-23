import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Radio, IRadioItem, Select, ISelectOptionItem } from '@pinkymini/nutriso-components-new';
import { useTranslation } from 'react-i18next';
import { ActivityLevel, Gender } from 'SRC/constants/common';

interface CalculatorFormProps {
  setCurrentStep: (data: any) => void;
  setCalculateResult: (data: any) => void;
}

const CalculatorForm = ({ setCurrentStep, setCalculateResult }: CalculatorFormProps) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: Gender.MALE,
      height: '',
      weight: '',
      age: '',
      activity: ActivityLevel.NO_EXERCISE,
    },
  });

  const activityToRateMapping: Record<string, number> = {
    [ActivityLevel.NO_EXERCISE]: 1.2,
    [ActivityLevel.LIGHT]: 1.4,
    [ActivityLevel.MODERATE]: 1.6,
    [ActivityLevel.ACTIVE]: 1.6,
    [ActivityLevel.EXTRA_ACTIVE]: 2,
  };

  const radioItems: IRadioItem[] = [
    {
      id: Gender.MALE,
      value: Gender.MALE,
      labelText: t('main_Gender_Option_Male'),
    },
    {
      id: Gender.FEMALE,
      value: Gender.FEMALE,
      labelText: t('main_Gender_Option_Female'),
    },
  ];

  const selectOptions: ISelectOptionItem[] = [
    {
      id: ActivityLevel.NO_EXERCISE,
      value: ActivityLevel.NO_EXERCISE,
      optionText: t('main_Activity_Option_NoExercise'),
    },
    {
      id: ActivityLevel.LIGHT,
      value: ActivityLevel.LIGHT,
      optionText: t('main_Activity_Option_Light'),
    },
    {
      id: ActivityLevel.MODERATE,
      value: ActivityLevel.MODERATE,
      optionText: t('main_Activity_Option_Moderate'),
    },
    {
      id: ActivityLevel.ACTIVE,
      value: ActivityLevel.ACTIVE,
      optionText: t('main_Activity_Option_Active'),
    },
    {
      id: ActivityLevel.EXTRA_ACTIVE,
      value: ActivityLevel.EXTRA_ACTIVE,
      optionText: t('main_Activity_Option_ExtraActive'),
    },
  ];

  const formContent = [
    {
      name: 'gender',
      labelText: t('main_Gender_Label_Text'),
      render: () => (
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Radio
              {...field}
              defaultValue={radioItems[0].value}
              radioGroupList={radioItems}
              onValueChange={(value) => field.onChange(value)}
              className="flex"
            />
          )}
        />
      ),
    },
    {
      name: 'age',
      labelText: t('main_Age_Label_Text'),
      render: () => (
        <>
          <Input
            {...register('age', { required: t('main_Age_Required_Text') })}
            placeholder={t('main_Age_Placeholder_Text')}
            type="number"
            min={0}
          />
        </>
      ),
      hasError: errors.age,
    },
    {
      name: 'height',
      labelText: t('main_Height_Label_Text'),
      render: () => (
        <Input
          {...register('height', { required: t('main_Age_Required_Text') })}
          placeholder={t('main_Height_Placeholder_Text')}
          type="number"
          min={0}
        />
      ),
      hasError: errors.height,
    },
    {
      name: 'weight',
      labelText: t('main_Weight_Label_Text'),
      render: () => (
        <Input
          {...register('weight', { required: t('main_Age_Required_Text') })}
          placeholder={t('main_Weight_PlaceholderText')}
          type="number"
        />
      ),
      hasError: errors.weight,
    },
    {
      name: 'activity',
      labelText: t('main_Activity_Label_Text'),
      render: () => (
        <Controller
          name="activity"
          control={control}
          render={({ field }) => (
            <Select {...field} selectOption={selectOptions} onValueChange={(value) => field.onChange(value)} />
          )}
        />
      ),
    },
  ];

  const calculateData = (data: any) => {
    let bmr = 0;
    let tdee = 0;
    const { gender, height, weight, age, activity } = data;
    if (gender === 'male') {
      bmr = Math.ceil(10 * weight + 6.25 * height - 5 * age + 5);
    } else {
      bmr = Math.ceil(10 * weight + 6.25 * height - 5 * age - 161);
    }
    tdee = Math.ceil(activityToRateMapping[activity] * bmr);

    setCalculateResult({ bmr, tdee });
    setCurrentStep(2);
  };

  return (
    <form className="mt-5 flex flex-col gap-4 h-full" action="" onSubmit={handleSubmit(calculateData as any)}>
      {formContent.map((item) => (
        <div id={item.name}>
          <label className="block mb-1 text-gray-700">{item.labelText}</label>
          {item.render()}
          {item.hasError && (
            <span className="text-error-400 mt-1 inline-block text-sm">{t('main_Required_Error_Text')}</span>
          )}
        </div>
      ))}
      <Button
        type="submit"
        className="mt-auto"
        disabled={Boolean(errors.age) || Boolean(errors.height) || Boolean(errors.weight)}
      >
        {t('main_Calculate_Button_Text')}
      </Button>
    </form>
  );
};

export default CalculatorForm;
