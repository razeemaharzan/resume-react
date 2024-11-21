import { configureStore } from '@reduxjs/toolkit'
// ...
import profileReducer from '../pages/Profile/ProfileSlice';
import educationReducer from '../pages/Education/EducationSlice';
import experienceReducer from '../pages/Experience/ExperienceSlice';
import skillReducer from '../pages/Skill/SkillSlice';
import certificateReducer from '../pages/Certificate/CertificateSlice';
import hobbyReducer from '../pages/Hobbies/HobbiesSlice';
import interestReducer from '../pages/Interest/InterestSlice';
const store = configureStore({
  reducer: {
    profile: profileReducer,
    education: educationReducer,
    experience: experienceReducer,
    skill: skillReducer,
    certificate: certificateReducer,
    hobby: hobbyReducer,
    interest: interestReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store