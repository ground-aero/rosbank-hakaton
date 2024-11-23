import React, { Dispatch, SetStateAction } from 'react';


interface TeamContextType {
    teams: [],
    setTeams: Dispatch<SetStateAction<any>>,
    isTeamId: number | string | null,
    isTeamTotal: number,
    isTeamName: string,
    setTeamName: Dispatch<SetStateAction<string>>,
    employees: [],
    setEmployees: Dispatch<SetStateAction<any>>,
    isEmployeeId: number | null,
    selectedEmployeeName: string | '',
    isBusFactor: number,
    setBusFactor: Dispatch<SetStateAction<number>>,
}

// Создаем контекст с дефолтным значением
export const TeamContext = React.createContext<TeamContextType>({
    teams: [],
    setTeams: () => {},
    isTeamId: null,
    isTeamTotal: 0,
    isTeamName: '',
    setTeamName: () => {},
    employees: [],
    setEmployees: () => {},
    isEmployeeId: null,
    selectedEmployeeName: '',
    isBusFactor: 0,
    setBusFactor: () => {}, // Заглушка для setBusFactor
});