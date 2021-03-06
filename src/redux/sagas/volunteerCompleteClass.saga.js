import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Required data on payload:
// {
//   images: ['array of img urls'],
//   program_id: 'number',
//   scheduled_class_id: 'number',
//   class_size: 'number',
// }

function* volunteerCompleteClass(action) {
  try {
    yield axios.post('/volunteer', action.payload);
    yield put({ type: 'GET_SCHEDULED_CLASSES' });
  } catch (error) {
    console.log('Submit Completed Class Details Failed', error);
  }
}
function* volunteerCompleteClassSaga() {
  yield takeLatest('SUBMIT_CLASS_DETAILS', volunteerCompleteClass);
}
export default volunteerCompleteClassSaga;
