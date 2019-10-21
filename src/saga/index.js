import { call, put, take, takeLatest, takeEvery, select } from 'redux-saga/effects';
import {fetchProjectsFor} from './firebase-projects';

function* fake(action) {
    console.log("HERE data is fetched from DB", { action })
    const {projects} = yield call( fetchProjectsFor,action.username)
    const introduction = { title: "About Me", text: "Hello, my name is Mason Fox and I am a Front end web developer. I have been working in web for 2 years and have a focus in Front End Development: HTML, CSS, and Javascript. I currently work at Service Spring Corp as a Front End Developer and am the founder and lead developer of Squarecard.io." }
    const contact = { title: 'My castle', email: 'kirsi.kuikka@feikki.kirsi', text: 'Send me mail, but nothing kinky.' }
    const footer = { facebook: "https://www.facebook.com", instagram: "https://www.instagram.com", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com" }
    
    yield put({ type: "FAKE_NAME", name: 'Kirsi Kuikka' })
    yield put({ type: "FAKE_INTRO", introduction })
    yield put({ type: "FAKE_PROJECTS", projects })
    yield put({ type: "FAKE_CONTACT", contact })
    yield put({ type: "FAKE_FOOTER", footer })
}

const twiggers = [{
    slug: "susanna",
    name: "Susanna",
    imageUrl: ""
}]

function* getListOfTwiggers() {
    // GET DATA FROM DB, then store it
    yield put ({type: "FAKE_TWIGGERS", twiggers})
}

function* yieldFakes() {
    yield takeEvery("GET_FAKE_DATA", fake)
}

function* yieldTwiggers() {
    yield takeEvery("GET_LIST_OF_TWIGGERS", getListOfTwiggers)
}


export function* rootSaga() {
    yield [
        yieldFakes(),
        yieldTwiggers()
    ]
    
}
