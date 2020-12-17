import { render, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios'
import userEvent from '@testing-library/user-event'

axios.post = jest.fn().mockResolvedValue()

describe("Signup page", () =>{
  test("Rendering of page elements", async () =>{
    const {getByPlaceholderText} = render(<App/>)

    expect(getByPlaceholderText("Nome")).toBeInTheDocument()
    expect(getByPlaceholderText("Email")).toBeInTheDocument()
    expect(getByPlaceholderText("Nickname")).toBeInTheDocument()
    expect(getByPlaceholderText("Senha")).toBeInTheDocument()
  });

  test("Post method sign up", async () =>{
    axios.post = jest.fn().mockResolvedValue()
    const {getByPlaceholderText, getByText} = render(<App/>)

      const name = getByPlaceholderText("Nome")
      await userEvent.type(name, "Test")
      expect(name).toHaveValue("Test")
      const email = getByPlaceholderText("Email")
      await userEvent.type(email, "test@test.com")
      expect(email).toHaveValue("test@test.com")
      const nickname = getByPlaceholderText("Nickname")
      await userEvent.type(nickname, "litleTest")
      expect(nickname).toHaveValue("litleTest")
      const password = getByPlaceholderText("Senha")
      await userEvent.type(password, "123testing")
      expect(password).toHaveValue("123testing")

      fireEvent.click(getByText("Cadastrar"))

      expect(axios.post).toHaveBeenCalledWith("http://localhost:3003/user/signup", {
        name: "Test",
        email: "test@test.com",
        nickname: "litleTest",
        password: "123testing"
      })

      expect(name).toHaveValue("")
      expect(email).toHaveValue("")
      expect(nickname).toHaveValue("")
      expect(password).toHaveValue("")
  })
})
