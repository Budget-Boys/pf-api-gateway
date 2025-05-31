const userServiceURL = process.env.USER_SERVICE_URL || 'http://localhost:3001';

export const proxyCreateUser = async (userData: any) => {
    const response = await fetch(`${userServiceURL}/users`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })

    if(!response.ok){
        throw new Error(`Erro ao criar usuário: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
}

export const proxyGetUserById = async (id:string) => {
    const response = await fetch(`${userServiceURL}/users/${id}`);

    if(!response.ok){
         throw new Error(`Erro ao buscar usuário: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

export const proxyLoginUser = async (loginData: any) => {
    const response = await fetch(`${userServiceURL}/users/login`,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(loginData),
    })

    if(!response.ok){
        throw new Error('Login falhou')
    }
    
    return await response.json();
}

export const proxyRegisterUser = async (registerData: any) => {
    const response = await fetch(`${userServiceURL}/users/register`,{
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(registerData),
    })

    if(!response.ok){
         throw new Error('Registro falhou');
    }

     return await response.json();
}