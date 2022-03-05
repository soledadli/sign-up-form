import { render, fireEvent } from '@testing-library/react';
import App from './App';
import emailValidate from './components/emailValidate';

describe("Sign Up Form Test Statement", () =>{
  test("they are not correct email addressses", () => {
    // With numbers
    expect(emailValidate("adb@10")).toBeFalsy()
    expect(emailValidate("adb@ld2.2c")).toBeFalsy

    // With special characters
    expect(emailValidate("mysite@.com.my")).toBeFalsy()
    expect(emailValidate("mysite()*@gmail.com")).toBeFalsy()
    expect(emailValidate("mysite..1234@yahoo.com")).toBeFalsy()
    expect(emailValidate(".mysite@mysite.org")).toBeFalsy()
    expect(emailValidate(".mysite.@mysite.org")).toBeFalsy()
    expect(emailValidate("mysite@.org.org")).toBeFalsy()

    // Wrong formats 
    expect(emailValidate("")).toBeFalsy()
    expect(emailValidate("adb")).toBeFalsy()
    expect(emailValidate("adb@ld")).toBeFalsy
    expect(emailValidate("@you.me.net ")).toBeFalsy
    expect(emailValidate(".mysite.@mysite.org")).toBeFalsy()
  });

  test("they are right email addressses", () => {
    expect(emailValidate("adb@ld.co")).toBeTruthy()
    expect(emailValidate("adbdsdfsdfsdfefsd@lddd.co")).toBeTruthy()
    expect(emailValidate("mysite.123@gmail.com")).toBeTruthy
  });

  test(" sign up form can be submitted successfully", () => {
    const testForm = jest.fn();
    const { getByRole } = render(<App handleFormSubmit = { testForm }/>);
    const claimBtnNode = getByRole("claim-button");
    fireEvent.submit(claimBtnNode);
  });
})