const userServiceURL = process.env.USER_SERVICE_URL
const financeServiceURL = process.env.FINANCE_SERVICE_URL

export const proxyCompleteDashboard = async (userId:string)=>{
    const userURL = `${userServiceURL}/users/${userId}`
    const incomeURL = `${financeServiceURL}/incomes/${userId}`
    const expenseURL = `${financeServiceURL}/expenses/${userId}`

    const[userRes, incomeRes, expensesRes] = await Promise.all([
        fetch(userURL),
        fetch(incomeURL),
        fetch(expenseURL)
    ])

    if(!userRes.ok){
        Error('Erro ao buscar usuário')
    }
    if(!incomeRes.ok){
        Error('Erro ao buscar receitas')
    }
    if(!expensesRes.ok){
        Error('Erro ao buscar despesas')
    }

    const userData = await userRes.json()
    const incomesData = await incomeRes.json()
    const expenseData = await expensesRes.json()

    return {
        user: userData,
        incomes: incomesData,
        expenses: expenseData
    }
}