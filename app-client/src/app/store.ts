import { SET_LEVELS, SET_SUBJECT_NAME, SET_LEVEL_NAME, USER_LOGIN, USER_LOGOUT } from './actions';
export interface IAppState {
    lastUpdate: Date;
    subjectName:string;
    levelName:string;
    userName: String;
    isAdmin: boolean;
    levels:any[]
}
    
export const INITIAL_STATE: IAppState = {
    lastUpdate: null,
    subjectName:'',
    levelName:'',
    isAdmin: false,
    userName: null,
    levels:[]
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
        case USER_LOGIN: 
            return Object.assign({}, state, {
                lastUpdate: new Date(),
                isAdmin: action.isAdmin,
                userName: action.userName
            })
        case USER_LOGOUT:
            return Object.assign({}, state, {
                lastUpdate: new Date(),
                isAdmin: false,
                userName: null
            })

            case SET_LEVELS:
            return Object.assign({}, state, {
                levels:action.levels
            })
    }    
    return state;
}