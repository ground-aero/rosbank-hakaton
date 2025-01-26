import React, { Dispatch, SetStateAction } from 'react';


interface ContextType {
    teams: [],
    setTeams: Dispatch<SetStateAction<any>>,
    isTeamId: number | string | null,
    isTeamTotal: number,
    isTeamName: string,
    setTeamName: Dispatch<SetStateAction<string>>,
    employees: [],
    setEmployees: Dispatch<SetStateAction<any>>,
    isEmployeeId: number | null,
    selectedEmployee: null | {},
    employeesByPosition: [],
    setEmployeesByPosition: Dispatch<SetStateAction<any>>,
    isBusFactor: number,
    setBusFactor: Dispatch<SetStateAction<number>>,
    positions: [],
    setPositions: Dispatch<SetStateAction<any>>,
    isPositionId: number | string | null,
    selectedPosition: null | {},
    setSelectedPosition: Dispatch<SetStateAction<any>>,
}

// Создаем контекст с дефолтным значением
export const AppContext = React.createContext<ContextType>({
    teams: [],
    setTeams: () => {},
    isTeamId: null,
    isTeamTotal: 0,
    isTeamName: '',
    setTeamName: () => {},
    employees: [],
    setEmployees: () => {},
    isEmployeeId: null,
    selectedEmployee: {},
    employeesByPosition: [],
    setEmployeesByPosition: () => {},
    isBusFactor: 0,
    setBusFactor: () => {}, // Заглушка для setBusFactor,
    positions: [],
    setPositions: () => {},
    isPositionId: null,
    selectedPosition: {},
    setSelectedPosition: () => {},
});