import express from 'express'
import auth from '../middleware/auth.js'

import {AskQuestion} from '../controllers/Questions.js' 
import {getAllquestion,deleteQuestion,voteQuestion} from '../controllers/Questions.js'
const router = express.Router()

router.post('/Ask',auth,AskQuestion)
router.get('/get',getAllquestion)
router.delete('/delete/:id',auth,deleteQuestion);
router.patch('/vote/:id',auth,voteQuestion)

export default router


//33.5