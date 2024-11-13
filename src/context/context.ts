import React, { Dispatch, SetStateAction } from 'react';


interface TeamContextType {
    isEmployeeId: number | null,
    selectedEmployeeName: string | '',
    isTeamId: number | null,
    isTeamTotal: number,
    isBusFactor: number,
    setBusFactor: Dispatch<SetStateAction<number>>,
    isTeamName: string,
    setTeamName: Dispatch<SetStateAction<string>>,
}

// Создаем контекст с дефолтным значением
export const TeamContext = React.createContext<TeamContextType>({
    isEmployeeId: null,
    selectedEmployeeName: '',
    isTeamId: null,
    isTeamTotal: 0,
    isBusFactor: 0,
    setBusFactor: () => {}, // Заглушка для setBusFactor
    isTeamName: '- - -',
    setTeamName: () => {}
});