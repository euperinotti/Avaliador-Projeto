describe("Rota de login", () => {
  test("Deve retornar um registro de aluno", () => {
    const data = {
      login: 'grsperinotti',
      senha: '050310',
      PG: 'login'
    }

    const response = axios.post(
      'https://www4.fag.edu.br/api_summit/login.php',
      JSON.stringify(data)
    )

    expect(response).not.toBeNull();
    
  })
})