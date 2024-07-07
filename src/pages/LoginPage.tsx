// import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Input, Button } from '@pinkymini/nutriso-components-new';
import PublicPageLayout from 'SRC/components/layouts/PublicLayout';

const LoginPage = () => {
  const { t } = useTranslation();

  const {
    register,
    // handleSubmit,
    // control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      // name: '',
    },
  });

  const formContent = [
    {
      name: 'email',
      labelText: t('main_Email_Label'),
      render: () => (
        <Input
          {...register('email', { required: t('main_Required_Error_Text') })}
          placeholder={t('main_Email_Input_Placeholder')}
          type="email"
          min={0}
        />
      ),
      hasError: errors.email,
    },
    {
      name: 'password',
      labelText: t('main_Password_Label'),
      render: () => (
        <Input
          {...register('password', { required: t('main_Required_Error_Text') })}
          placeholder={t('main_Password_Input_Placeholder')}
          type="password"
        />
      ),
      hasError: errors.password,
    },
    // {
    //   name: 'name',
    //   labelText: t('main_Name_Label'),
    //   render: () => (
    //     <Input
    //       {...register('name', { required: t('main_Age_Required_Text') })}
    //       placeholder={t('main_Password_Input_Placeholder')}
    //       type="password"
    //     />
    //   ),
    //   hasError: errors.name,
    // },
  ];

  return (
    <PublicPageLayout>
      <div className="w-[500px] flex flex-col">
        <div className="flex flex-col w-[500px] overflow-y-auto bg-primary-100 rounded-lg p-7 drop-shadow-lg h-fit">
          <h2 className="text-3xl font-bold text-center">{t('main_Login_Title')}</h2>
          <form className="flex flex-col mt-5 gap-4" action="">
            {formContent.map((item) => (
              <div id={item.name}>
                <label className="block mb-1 text-gray-700">{item.labelText}</label>
                {item.render()}
                {item.hasError && (
                  <span className="text-error-400 mt-1 inline-block text-sm">{t('main_Required_Error_Text')}</span>
                )}
              </div>
            ))}
            <Button type="submit" className="mt-auto" disabled={Boolean(errors.email) || Boolean(errors.password)}>
              {t('main_Calculate_Button_Text')}
            </Button>
          </form>
        </div>
        <Button className="mt-3 self-end" variant="link">
          {t('main_Registration_Title')}
        </Button>
      </div>
    </PublicPageLayout>
  );
};

export default LoginPage;
