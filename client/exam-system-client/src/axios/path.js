 const api="/api"
export default{
    getAdministratorList:api+"/administrator/name/list",
    studentSignUp:api+"/student/signup",
    studentLogin:api+"/student/login",
    adminLogin:api+"/administrator/login",

    studentCount:api+"/teacher/student/count",
    courseCount:api+"/teacher/course/count",
    questionCount:api+"/teacher/question/count",
    examPaperCount:api+"/teacher/exam/paper/count",
    courseListNameAndId:api+"/teacher/course/list/name/id",
    chapterListNameTitleAndId:api+"/teacher/chapter/list/name/title/id",
    subsectionListNameAndId:api+"/teacher/subsections/list/name/id",
    questionListByParams:api+"/teacher/question/list/byCourseChapterSubsectionContentType",
    subsectionInfo:api+"/teacher/subsection/info",
    answerInfo:api+"/teacher/answer/info/by/questionId",
    chapterListNameTitleAndIdInCourseId:api+"/teacher/chapter/list/name/title/id/in/courseIds",
    subsectionListNameAndIdInChapterId:api+"/teacher/subsections/list/name/id/by/chapterIds",
    pullQuestionListByParams:api+"/teacher/question/select/bySubsectionsAndTypeLimitNum",
    questionListByParamsNotQuestionId:api+"/teacher/question/select/bySubsectionsAndTypeLimitNumNotQuestionId",
    createExamPaper:api+"/teacher/exam/paper/insert",
    getExamPaperIdTitle:api+"/teacher/exam/paper/select/selectAllExamPaperIdTitle",
    getAllStudent:api+"/teacher/student/select/selectAllStudent",
    releaseExamPaper:api+"/teacher/release/examPaper/insertExamPaperRelease",
    getExamPaperListByParams:api+"/teacher/exam/paper/select/selectExamPaperByParams",
    
    getExamPaperCountByState:api+"/student/count/allocationExamPaperCountByStudentIdAndState",
    getAnswerQuestionCountByStudentId:api+"/student/answerRecordCountByStudentId",
    getWoringQuestionCountByStudentId:api+"/student/wrongQuestionRecordCountByStudentId",
    getLastExamScoreByStudentId:api+"/student/lastScoreByExamPaperAllocationId",
    getAvgScoreByStudentId:api+"/student/avgScoreByStudentId",
    getExamCountByStudentId:api+"/student/count/ExamCountByStudentId",
    getExamPaperListByStudentIdAndState:api+"/student/list/selectExamPaperAllocationsByStudentIdParamState",
    getExamPaperByExamPaperAllocationId:api+"/student/exam/selectExamPaperAllocationByExamPaperAllocationId"
}