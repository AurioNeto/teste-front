import api from "./constant";

export async function getExpenses() {
	return await api.get(`/expenses?page=1&perPage=20`)
}

export async function createExpense(data: any) {
	return await api.post(`/expenses`, data)
}

export async function getExpenseById(id: string) {
	return await api.get(`/expenses/${id}`)
}

export async function editExpense(id: string, data: any) {
	return await api.put(`/expenses/${id}`, data)
}

export async function deleteExpense(id: string) {
	return await api.delete(`/expenses/${id}`)
}
