const financeServiceURL = process.env.FINANCE_SERVICE_URL || 'http://localhost:3003';

export const proxyGetIncomes = async () => {
    const response = await fetch(`${financeServiceURL}/incomes`)

    if(!response.ok){
        throw new Error('Erro ao buscar receitas')
    }

    return await response.json();
}

export const proxyCreateIncome = async (data: any) => {
    const response = await fetch(`${financeServiceURL}/incomes`,{
    method: 'POST',
    headers: {'Contente-Type': 'application/json'},
    body: JSON.stringify(data),
    })

    if(!response.ok){
        throw new Error('Erro ao criar receita')
    }
    return await response.json();
}
export const proxyGetExpenses = async () =>{
    const response = await fetch(`${financeServiceURL}/expenses`)

    if(!response.ok){
        throw new Error('Erro ao buscar despesas')
    }

    return await response.json();
}

export const proxyCreateExpenses =async (data: any) => {
    const response = await fetch(`${financeServiceURL}/expenses`,{
    method:'POST',
    headers:{'Content-Type':'applicantion/json'},
    body: JSON.stringify(data),
    })
    if(!response.ok){
        throw new Error('Erro ao criar despesa')
    }
    return await response.json();

}
