export type TTeam = {
    id: number,
    name: string,
}

export type TEmployee = {
    id: number,
    last_name: string,
    first_name: string,
    grade: string,
    position: string,
    team: string,
}

export type TEmployeeSuitability = {
    employee_id: string,
    employee: string,
    percentage: number,
    total: number,
    total_yes: number,
}

export type TPosition = {
    position: string,
    percentage: number,
    position_employee_count: number,
    total_employee_count: number,
}
