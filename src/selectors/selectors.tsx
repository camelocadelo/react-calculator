interface IAppState {
    display: string;
    calcHistory: any[];
}

export const getDisplay = (store: IAppState) => store.display;
export const getCalcHistory = (store: IAppState) => store.calcHistory;