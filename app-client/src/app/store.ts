import { SET_SUBJECT_NAME, SET_LEVEL_NAME } from './actions';
export interface IAppState {
    lastUpdate: Date;
    subjectName:string;
    levelName:string;
}
    
    export const INITIAL_STATE: IAppState = {
        lastUpdate: null,
        subjectName:'',
        levelName:''
    }

    export function rootReducer(state: IAppState, action): IAppState {
        switch (action.type) {
            case SET_SUBJECT_NAME:   
                return Object.assign({}, state, {
                    lastUpdate: new Date(),
                    subjectName:action.todo                    
                })

                case SET_LEVEL_NAME:   
                    return Object.assign({}, state, {
                        lastUpdate: new Date(),
                        levelName:action.todo                    
                    })
            }    
            

        return state;
    }