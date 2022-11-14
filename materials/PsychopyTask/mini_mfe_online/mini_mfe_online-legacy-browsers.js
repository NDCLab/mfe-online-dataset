/************************ 
 * Mini_Mfe_Online Test *
 ************************/


// store info about the experiment session:
let expName = 'mini_mfe_online';  // from the Builder filename that created this script
let expInfo = {
    'id': '',
};

// Start code blocks for 'Before Experiment'
// for our own functions we need these specified in the global space 
// so these are defined in the "Before experiment" tab
// linspace (this will be used in place of numpy.linspace for picking ISI)


var n;
function linspace(a,b,n) {
    if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
    if(n<2) { return n===1?[a]:[]; }
    var i,ret = Array(n);
    n--;
    for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
    return ret;
}
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('0.5000, 0.5000, 0.5000'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(JS_codeRoutineBegin());
flowScheduler.add(JS_codeRoutineEachFrame());
flowScheduler.add(JS_codeRoutineEnd());
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(instructRightRoutineBegin());
flowScheduler.add(instructRightRoutineEachFrame());
flowScheduler.add(instructRightRoutineEnd());
flowScheduler.add(instructLeftRoutineBegin());
flowScheduler.add(instructLeftRoutineEachFrame());
flowScheduler.add(instructLeftRoutineEnd());
flowScheduler.add(instructInconRightRoutineBegin());
flowScheduler.add(instructInconRightRoutineEachFrame());
flowScheduler.add(instructInconRightRoutineEnd());
flowScheduler.add(instructInconLeftRoutineBegin());
flowScheduler.add(instructInconLeftRoutineEachFrame());
flowScheduler.add(instructInconLeftRoutineEnd());
const prac_block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_block_loopLoopBegin(prac_block_loopLoopScheduler));
flowScheduler.add(prac_block_loopLoopScheduler);
flowScheduler.add(prac_block_loopLoopEnd);
flowScheduler.add(redCap1RoutineBegin());
flowScheduler.add(redCap1RoutineEachFrame());
flowScheduler.add(redCap1RoutineEnd());
const task_block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(task_block_loopLoopBegin(task_block_loopLoopScheduler));
flowScheduler.add(task_block_loopLoopScheduler);
flowScheduler.add(task_block_loopLoopEnd);
flowScheduler.add(fixation1RoutineBegin());
flowScheduler.add(fixation1RoutineEachFrame());
flowScheduler.add(fixation1RoutineEnd());
flowScheduler.add(errorNumbersRoutineBegin());
flowScheduler.add(errorNumbersRoutineEachFrame());
flowScheduler.add(errorNumbersRoutineEnd());
flowScheduler.add(errorPercentageRoutineBegin());
flowScheduler.add(errorPercentageRoutineEachFrame());
flowScheduler.add(errorPercentageRoutineEnd());
flowScheduler.add(botherRateRoutineBegin());
flowScheduler.add(botherRateRoutineEachFrame());
flowScheduler.add(botherRateRoutineEnd());
flowScheduler.add(redCap2RoutineBegin());
flowScheduler.add(redCap2RoutineEachFrame());
flowScheduler.add(redCap2RoutineEnd());
flowScheduler.add(surpriseInstructRoutineBegin());
flowScheduler.add(surpriseInstructRoutineEachFrame());
flowScheduler.add(surpriseInstructRoutineEnd());
const surprise_block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(surprise_block_loopLoopBegin(surprise_block_loopLoopScheduler));
flowScheduler.add(surprise_block_loopLoopScheduler);
flowScheduler.add(surprise_block_loopLoopEnd);
flowScheduler.add(redCap3RoutineBegin());
flowScheduler.add(redCap3RoutineEachFrame());
flowScheduler.add(redCap3RoutineEnd());
flowScheduler.add(finishMessageRoutineBegin());
flowScheduler.add(finishMessageRoutineEachFrame());
flowScheduler.add(finishMessageRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'img/neutralC/CFD-WM-228-065-N.jpg', 'path': 'img/neutralC/CFD-WM-228-065-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-237-067-N.jpg', 'path': 'img/neutralC/CFD-WF-237-067-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-211-128-N.jpg', 'path': 'img/neutralC/CFD-LM-211-128-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-240-083-N.jpg', 'path': 'img/neutralC/CFD-WF-240-083-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-331-010-N.jpg', 'path': 'img/neutralC/CFD-MF-331-010-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-625-225-N.jpg', 'path': 'img/neutralC/CFD-IF-625-225-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-249-091-N.jpg', 'path': 'img/neutralC/CFD-BF-249-091-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-321-003-N.jpg', 'path': 'img/neutralC/CFD-MF-321-003-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-312-002-N.jpg', 'path': 'img/neutralC/CFD-MM-312-002-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-222-134-N.jpg', 'path': 'img/neutralC/CFD-AF-222-134-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-233-236-N.jpg', 'path': 'img/neutralC/CFD-AM-233-236-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-309-002-N.jpg', 'path': 'img/neutralC/CFD-MF-309-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-230-131-N.jpg', 'path': 'img/neutralC/CFD-WM-230-131-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-246-087-N.jpg', 'path': 'img/neutralC/CFD-LM-246-087-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-209-052-N.jpg', 'path': 'img/neutralC/CFD-WF-209-052-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-207-004-N.jpg', 'path': 'img/neutralC/CFD-LM-207-004-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-603-305-N.jpg', 'path': 'img/neutralC/CFD-IM-603-305-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-350-029-N.jpg', 'path': 'img/neutralC/CFD-MF-350-029-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-224-162-N.jpg', 'path': 'img/neutralC/CFD-LM-224-162-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-215-145-N.jpg', 'path': 'img/neutralC/CFD-WF-215-145-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-309-027-N.jpg', 'path': 'img/neutralC/CFD-MM-309-027-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-698-011-N.jpg', 'path': 'img/neutralC/CFD-IM-698-011-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-246-170-N.jpg', 'path': 'img/neutralC/CFD-BF-246-170-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-655-234-N.jpg', 'path': 'img/neutralC/CFD-IM-655-234-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-211-168-N.jpg', 'path': 'img/neutralC/CFD-BF-211-168-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-252-076-N.jpg', 'path': 'img/neutralC/CFD-LM-252-076-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-024-002-N.jpg', 'path': 'img/neutralC/CFD-BF-024-002-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-015-004-N.jpg', 'path': 'img/neutralC/CFD-BF-015-004-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-635-010-N.jpg', 'path': 'img/neutralC/CFD-IM-635-010-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-243-075-N.jpg', 'path': 'img/neutralC/CFD-LM-243-075-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-254-201-N.jpg', 'path': 'img/neutralC/CFD-BF-254-201-N.jpg'},
    {'name': 'half_surp_table6.csv', 'path': 'half_surp_table6.csv'},
    {'name': 'img/neutralC/CFD-IM-692-011-N.jpg', 'path': 'img/neutralC/CFD-IM-692-011-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-320-124-N.jpg', 'path': 'img/neutralC/CFD-MM-320-124-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-343-001-N.jpg', 'path': 'img/neutralC/CFD-MF-343-001-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-012-001-N.jpg', 'path': 'img/neutralC/CFD-WM-012-001-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-215-120-N.jpg', 'path': 'img/neutralC/CFD-AM-215-120-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-211-052-N.jpg', 'path': 'img/neutralC/CFD-AM-211-052-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-025-002-N.jpg', 'path': 'img/neutralC/CFD-BF-025-002-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-216-114-N.jpg', 'path': 'img/neutralC/CFD-AM-216-114-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-242-121-N.jpg', 'path': 'img/neutralC/CFD-LF-242-121-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-232-187-N.jpg', 'path': 'img/neutralC/CFD-BF-232-187-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-035-001-N.jpg', 'path': 'img/neutralC/CFD-BF-035-001-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-231-357-N.jpg', 'path': 'img/neutralC/CFD-AF-231-357-N.jpg'},
    {'name': 'img/rightArrow.png', 'path': 'img/rightArrow.png'},
    {'name': 'a_halfV_trialTable_practice.csv', 'path': 'a_halfV_trialTable_practice.csv'},
    {'name': 'img/neutralC/CFD-LF-207-198-N.jpg', 'path': 'img/neutralC/CFD-LF-207-198-N.jpg'},
    {'name': 'half_surp_table4.csv', 'path': 'half_surp_table4.csv'},
    {'name': 'img/neutralC/CFD-MF-329-001-N.jpg', 'path': 'img/neutralC/CFD-MF-329-001-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-644-306-1-N.jpg', 'path': 'img/neutralC/CFD-IF-644-306-1-N.jpg'},
    {'name': 'img/transp_fixation.png', 'path': 'img/transp_fixation.png'},
    {'name': 'img/neutralC/CFD-BF-206-143-N.jpg', 'path': 'img/neutralC/CFD-BF-206-143-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-731-223-N.jpg', 'path': 'img/neutralC/CFD-IM-731-223-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-002-004-N.jpg', 'path': 'img/neutralC/CFD-WF-002-004-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-019-001-N.jpg', 'path': 'img/neutralC/CFD-BF-019-001-N.jpg'},
    {'name': 'a_halfV_trialTable_6.csv', 'path': 'a_halfV_trialTable_6.csv'},
    {'name': 'img/neutralC/CFD-LF-231-260-N.jpg', 'path': 'img/neutralC/CFD-LF-231-260-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-304-018-N.jpg', 'path': 'img/neutralC/CFD-MF-304-018-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-237-052-N.jpg', 'path': 'img/neutralC/CFD-WM-237-052-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-203-184-N.jpg', 'path': 'img/neutralC/CFD-BF-203-184-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-223-171-N.jpg', 'path': 'img/neutralC/CFD-BM-223-171-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-213-056-N.jpg', 'path': 'img/neutralC/CFD-AM-213-056-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-630-134-N.jpg', 'path': 'img/neutralC/CFD-IM-630-134-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-223-250-N.jpg', 'path': 'img/neutralC/CFD-BF-223-250-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-014-002-N.jpg', 'path': 'img/neutralC/CFD-WF-014-002-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-210-050-N.jpg', 'path': 'img/neutralC/CFD-AF-210-050-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-204-038-N.jpg', 'path': 'img/neutralC/CFD-WF-204-038-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-704-125-N.jpg', 'path': 'img/neutralC/CFD-IF-704-125-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-217-082-N.jpg', 'path': 'img/neutralC/CFD-LF-217-082-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-228-212-N.jpg', 'path': 'img/neutralC/CFD-BF-228-212-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-248-128-N.jpg', 'path': 'img/neutralC/CFD-BM-248-128-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-032-024-N.jpg', 'path': 'img/neutralC/CFD-BM-032-024-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-730-410-N.jpg', 'path': 'img/neutralC/CFD-IF-730-410-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-213-126-N.jpg', 'path': 'img/neutralC/CFD-AF-213-126-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-200-045-N.jpg', 'path': 'img/neutralC/CFD-LM-200-045-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-031-003-N.jpg', 'path': 'img/neutralC/CFD-WM-031-003-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-226-095-N.jpg', 'path': 'img/neutralC/CFD-WF-226-095-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-693-172-N.jpg', 'path': 'img/neutralC/CFD-IF-693-172-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-244-231-N.jpg', 'path': 'img/neutralC/CFD-BF-244-231-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-220-101-N.jpg', 'path': 'img/neutralC/CFD-WF-220-101-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-242-233-N.jpg', 'path': 'img/neutralC/CFD-BM-242-233-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-045-004-N.jpg', 'path': 'img/neutralC/CFD-BM-045-004-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-003-002-N.jpg', 'path': 'img/neutralC/CFD-WM-003-002-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-240-199-N.jpg', 'path': 'img/neutralC/CFD-LF-240-199-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-719-221-N.jpg', 'path': 'img/neutralC/CFD-IM-719-221-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-712-005-N.jpg', 'path': 'img/neutralC/CFD-IM-712-005-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-224-073-N.jpg', 'path': 'img/neutralC/CFD-BM-224-073-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-680-369-N.jpg', 'path': 'img/neutralC/CFD-IM-680-369-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-043-003-N.jpg', 'path': 'img/neutralC/CFD-BF-043-003-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-242-158-N.jpg', 'path': 'img/neutralC/CFD-AF-242-158-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-695-001-N.jpg', 'path': 'img/neutralC/CFD-IM-695-001-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-241-210-N.jpg', 'path': 'img/neutralC/CFD-WF-241-210-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-234-167-N.jpg', 'path': 'img/neutralC/CFD-BF-234-167-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-038-021-N.jpg', 'path': 'img/neutralC/CFD-WF-038-021-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-222-240-N.jpg', 'path': 'img/neutralC/CFD-BF-222-240-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-242-176-N.jpg', 'path': 'img/neutralC/CFD-AM-242-176-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-215-155-N.jpg', 'path': 'img/neutralC/CFD-BM-215-155-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-229-224-N.jpg', 'path': 'img/neutralC/CFD-AM-229-224-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-226-175-N.jpg', 'path': 'img/neutralC/CFD-LM-226-175-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-032-038-N.jpg', 'path': 'img/neutralC/CFD-BF-032-038-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-658-284-N.jpg', 'path': 'img/neutralC/CFD-IM-658-284-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-035-032-N.jpg', 'path': 'img/neutralC/CFD-WM-035-032-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-737-104-N.jpg', 'path': 'img/neutralC/CFD-IF-737-104-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-696-001-N.jpg', 'path': 'img/neutralC/CFD-IM-696-001-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-201-156-N.jpg', 'path': 'img/neutralC/CFD-WF-201-156-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-229-209-N.jpg', 'path': 'img/neutralC/CFD-BM-229-209-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-209-072-N.jpg', 'path': 'img/neutralC/CFD-LF-209-072-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-212-117-N.jpg', 'path': 'img/neutralC/CFD-BM-212-117-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-250-170-N.jpg', 'path': 'img/neutralC/CFD-BM-250-170-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-012-001-N.jpg', 'path': 'img/neutralC/CFD-BF-012-001-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-311-001-N.jpg', 'path': 'img/neutralC/CFD-MM-311-001-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-236-177-N.jpg', 'path': 'img/neutralC/CFD-BF-236-177-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-333-012-N.jpg', 'path': 'img/neutralC/CFD-MF-333-012-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-236-090-N.jpg', 'path': 'img/neutralC/CFD-AM-236-090-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-217-070-N.jpg', 'path': 'img/neutralC/CFD-WM-217-070-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-338-001-N.jpg', 'path': 'img/neutralC/CFD-MF-338-001-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-352-054-N.jpg', 'path': 'img/neutralC/CFD-MF-352-054-N.jpg'},
    {'name': 'blockSelect.csv', 'path': 'blockSelect.csv'},
    {'name': 'img/neutralC/CFD-AM-241-287-N.jpg', 'path': 'img/neutralC/CFD-AM-241-287-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-319-052-N.jpg', 'path': 'img/neutralC/CFD-MM-319-052-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-703-182-N.jpg', 'path': 'img/neutralC/CFD-IM-703-182-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-355-022-N.jpg', 'path': 'img/neutralC/CFD-MF-355-022-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-244-168-N.jpg', 'path': 'img/neutralC/CFD-AF-244-168-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-010-004-N.jpg', 'path': 'img/neutralC/CFD-WF-010-004-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-216-061-N.jpg', 'path': 'img/neutralC/CFD-WM-216-061-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-213-076-N.jpg', 'path': 'img/neutralC/CFD-WM-213-076-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-650-315-N.jpg', 'path': 'img/neutralC/CFD-IF-650-315-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-237-264-N.jpg', 'path': 'img/neutralC/CFD-LM-237-264-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-218-087-N.jpg', 'path': 'img/neutralC/CFD-WF-218-087-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-713-170-N.jpg', 'path': 'img/neutralC/CFD-IF-713-170-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-612-149-N.jpg', 'path': 'img/neutralC/CFD-IF-612-149-N.jpg'},
    {'name': 'a_halfV_trialTable_12.csv', 'path': 'a_halfV_trialTable_12.csv'},
    {'name': 'img/neutralC/CFD-AF-218-157-N.jpg', 'path': 'img/neutralC/CFD-AF-218-157-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-619-197-N.jpg', 'path': 'img/neutralC/CFD-IF-619-197-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-210-035-N.jpg', 'path': 'img/neutralC/CFD-AM-210-035-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-235-231-N.jpg', 'path': 'img/neutralC/CFD-LM-235-231-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-358-001-N.jpg', 'path': 'img/neutralC/CFD-MF-358-001-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-024-001-N.jpg', 'path': 'img/neutralC/CFD-BM-024-001-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-622-096-N.jpg', 'path': 'img/neutralC/CFD-IF-622-096-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-030-002-N.jpg', 'path': 'img/neutralC/CFD-BF-030-002-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-233-277-N.jpg', 'path': 'img/neutralC/CFD-LF-233-277-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-337-026-N.jpg', 'path': 'img/neutralC/CFD-MF-337-026-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-205-153-N.jpg', 'path': 'img/neutralC/CFD-AM-205-153-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-034-002-N.jpg', 'path': 'img/neutralC/CFD-BF-034-002-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-225-192-N.jpg', 'path': 'img/neutralC/CFD-BF-225-192-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-215-157-N.jpg', 'path': 'img/neutralC/CFD-LF-215-157-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-003-003-N.jpg', 'path': 'img/neutralC/CFD-BM-003-003-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-205-155-N.jpg', 'path': 'img/neutralC/CFD-AF-205-155-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-252-224-N.jpg', 'path': 'img/neutralC/CFD-WM-252-224-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-050-003-N.jpg', 'path': 'img/neutralC/CFD-BF-050-003-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-631-363-N.jpg', 'path': 'img/neutralC/CFD-IF-631-363-N.jpg'},
    {'name': 'half_surp_table8.csv', 'path': 'half_surp_table8.csv'},
    {'name': 'half_surp_table7.csv', 'path': 'half_surp_table7.csv'},
    {'name': 'img/neutralC/CFD-BF-201-080-N.jpg', 'path': 'img/neutralC/CFD-BF-201-080-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-341-018-N.jpg', 'path': 'img/neutralC/CFD-MF-341-018-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-250-157-N.jpg', 'path': 'img/neutralC/CFD-WM-250-157-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-216-079-N.jpg', 'path': 'img/neutralC/CFD-WF-216-079-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-252-161-N.jpg', 'path': 'img/neutralC/CFD-BM-252-161-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-621-136-N.jpg', 'path': 'img/neutralC/CFD-IM-621-136-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-220-107-N.jpg', 'path': 'img/neutralC/CFD-AF-220-107-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-224-176-N.jpg', 'path': 'img/neutralC/CFD-LF-224-176-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-213-061-N.jpg', 'path': 'img/neutralC/CFD-LM-213-061-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-323-001-N.jpg', 'path': 'img/neutralC/CFD-MF-323-001-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-226-251-N.jpg', 'path': 'img/neutralC/CFD-AF-226-251-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-230-232-N.jpg', 'path': 'img/neutralC/CFD-BM-230-232-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-701-312-N.jpg', 'path': 'img/neutralC/CFD-IM-701-312-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-038-037-N.jpg', 'path': 'img/neutralC/CFD-BF-038-037-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-215-70-N.jpg', 'path': 'img/neutralC/CFD-AF-215-70-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-301-011-N.jpg', 'path': 'img/neutralC/CFD-MM-301-011-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-243-170-N.jpg', 'path': 'img/neutralC/CFD-AF-243-170-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-004-014-N.jpg', 'path': 'img/neutralC/CFD-BF-004-014-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-217-189-N.jpg', 'path': 'img/neutralC/CFD-BF-217-189-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-229-160-N.jpg', 'path': 'img/neutralC/CFD-AF-229-160-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-238-129-N.jpg', 'path': 'img/neutralC/CFD-LM-238-129-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-033-025-N.jpg', 'path': 'img/neutralC/CFD-WM-033-025-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-215-041-N.jpg', 'path': 'img/neutralC/CFD-WM-215-041-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-214-139-N.jpg', 'path': 'img/neutralC/CFD-AF-214-139-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-742-103-N.jpg', 'path': 'img/neutralC/CFD-IF-742-103-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-605-066-N.jpg', 'path': 'img/neutralC/CFD-IF-605-066-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-210-220-N.jpg', 'path': 'img/neutralC/CFD-LF-210-220-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-016-001-N.jpg', 'path': 'img/neutralC/CFD-WM-016-001-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-653-008-N.jpg', 'path': 'img/neutralC/CFD-IM-653-008-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-685-004-N.jpg', 'path': 'img/neutralC/CFD-IM-685-004-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-699-002-N.jpg', 'path': 'img/neutralC/CFD-IM-699-002-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-320-002-N.jpg', 'path': 'img/neutralC/CFD-MF-320-002-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-201-035-N.jpg', 'path': 'img/neutralC/CFD-LF-201-035-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-227-054-N.jpg', 'path': 'img/neutralC/CFD-LF-227-054-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-610-766-N.jpg', 'path': 'img/neutralC/CFD-IF-610-766-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-230-189-N.jpg', 'path': 'img/neutralC/CFD-BF-230-189-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-249-163-N.jpg', 'path': 'img/neutralC/CFD-AM-249-163-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-009-001-N.jpg', 'path': 'img/neutralC/CFD-WF-009-001-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-221-184-N.jpg', 'path': 'img/neutralC/CFD-AM-221-184-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-203-023-N.jpg', 'path': 'img/neutralC/CFD-WM-203-023-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-212-050-N.jpg', 'path': 'img/neutralC/CFD-WF-212-050-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-629-234-N.jpg', 'path': 'img/neutralC/CFD-IF-629-234-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-632-097-N.jpg', 'path': 'img/neutralC/CFD-IM-632-097-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-233-171-N.jpg', 'path': 'img/neutralC/CFD-LM-233-171-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-246-184-N.jpg', 'path': 'img/neutralC/CFD-AM-246-184-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-204-031-N.jpg', 'path': 'img/neutralC/CFD-WM-204-031-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-243-107-N.jpg', 'path': 'img/neutralC/CFD-WM-243-107-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-306-003-N.jpg', 'path': 'img/neutralC/CFD-MF-306-003-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-209-006-N.jpg', 'path': 'img/neutralC/CFD-AF-209-006-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-241-125-N.jpg', 'path': 'img/neutralC/CFD-LM-241-125-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-219-101-N.jpg', 'path': 'img/neutralC/CFD-AM-219-101-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-039-025-N.jpg', 'path': 'img/neutralC/CFD-WF-039-025-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-308-001-N.jpg', 'path': 'img/neutralC/CFD-MM-308-001-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-017-002-N.jpg', 'path': 'img/neutralC/CFD-WM-017-002-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-207-004-N.jpg', 'path': 'img/neutralC/CFD-BF-207-004-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-738-191-N.jpg', 'path': 'img/neutralC/CFD-IM-738-191-N.jpg'},
    {'name': 'half_surp_table5.csv', 'path': 'half_surp_table5.csv'},
    {'name': 'img/neutralC/CFD-LF-246-129-N.jpg', 'path': 'img/neutralC/CFD-LF-246-129-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-314-001-N.jpg', 'path': 'img/neutralC/CFD-MF-314-001-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-204-122-N.jpg', 'path': 'img/neutralC/CFD-AM-204-122-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-241-222-N.jpg', 'path': 'img/neutralC/CFD-BF-241-222-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-646-023-N.jpg', 'path': 'img/neutralC/CFD-IM-646-023-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-218-132-N.jpg', 'path': 'img/neutralC/CFD-BM-218-132-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-654-417-N.jpg', 'path': 'img/neutralC/CFD-IM-654-417-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-036-003-N.jpg', 'path': 'img/neutralC/CFD-BM-036-003-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-011-002-N.jpg', 'path': 'img/neutralC/CFD-WM-011-002-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-238-242-N.jpg', 'path': 'img/neutralC/CFD-BM-238-242-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-236-221-N.jpg', 'path': 'img/neutralC/CFD-LF-236-221-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-206-204-N.jpg', 'path': 'img/neutralC/CFD-LM-206-204-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-710-016-N.jpg', 'path': 'img/neutralC/CFD-IF-710-016-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-029-031-N.jpg', 'path': 'img/neutralC/CFD-BF-029-031-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-214-090-N.jpg', 'path': 'img/neutralC/CFD-LF-214-090-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-231-099-N.jpg', 'path': 'img/neutralC/CFD-WF-231-099-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-205-007-N.jpg', 'path': 'img/neutralC/CFD-WM-205-007-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-219-141-N.jpg', 'path': 'img/neutralC/CFD-BM-219-141-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-028-002-N.jpg', 'path': 'img/neutralC/CFD-BM-028-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-024-015-N.jpg', 'path': 'img/neutralC/CFD-WM-024-015-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-674-281-N.jpg', 'path': 'img/neutralC/CFD-IM-674-281-N.jpg'},
    {'name': 'img/leftArrow.png', 'path': 'img/leftArrow.png'},
    {'name': 'img/neutralC/CFD-WF-210-086-N.jpg', 'path': 'img/neutralC/CFD-WF-210-086-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-224-099-N.jpg', 'path': 'img/neutralC/CFD-WF-224-099-N.jpg'},
    {'name': 'a_halfV_trialTable_5.csv', 'path': 'a_halfV_trialTable_5.csv'},
    {'name': 'img/neutralC/CFD-BF-027-002-N.jpg', 'path': 'img/neutralC/CFD-BF-027-002-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-700-009-N.jpg', 'path': 'img/neutralC/CFD-IM-700-009-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-687-511-N.jpg', 'path': 'img/neutralC/CFD-IM-687-511-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-649-016-N.jpg', 'path': 'img/neutralC/CFD-IF-649-016-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-236-072-N.jpg', 'path': 'img/neutralC/CFD-WM-236-072-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-208-068-N.jpg', 'path': 'img/neutralC/CFD-WM-208-068-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-240-191-N.jpg', 'path': 'img/neutralC/CFD-AM-240-191-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-317-002-N.jpg', 'path': 'img/neutralC/CFD-MF-317-002-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-005-003-N.jpg', 'path': 'img/neutralC/CFD-BM-005-003-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-010-003-N.jpg', 'path': 'img/neutralC/CFD-BM-010-003-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-223-138-N.jpg', 'path': 'img/neutralC/CFD-AM-223-138-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-025-019-N.jpg', 'path': 'img/neutralC/CFD-WF-025-019-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-316-156-N.jpg', 'path': 'img/neutralC/CFD-MM-316-156-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-628-176-N.jpg', 'path': 'img/neutralC/CFD-IM-628-176-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-253-075-N.jpg', 'path': 'img/neutralC/CFD-LM-253-075-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-335-002-N.jpg', 'path': 'img/neutralC/CFD-MF-335-002-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-679-069-N.jpg', 'path': 'img/neutralC/CFD-IM-679-069-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-210-148-N.jpg', 'path': 'img/neutralC/CFD-BM-210-148-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-240-206-N.jpg', 'path': 'img/neutralC/CFD-AF-240-206-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-248-129-N.jpg', 'path': 'img/neutralC/CFD-WF-248-129-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-236-248-N.jpg', 'path': 'img/neutralC/CFD-BM-236-248-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-206-079-N.jpg', 'path': 'img/neutralC/CFD-AF-206-079-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-014-002-N.jpg', 'path': 'img/neutralC/CFD-WM-014-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-207-048-N.jpg', 'path': 'img/neutralC/CFD-WM-207-048-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-239-128-N.jpg', 'path': 'img/neutralC/CFD-WM-239-128-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-019-005-N.jpg', 'path': 'img/neutralC/CFD-WF-019-005-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-016-036-N.jpg', 'path': 'img/neutralC/CFD-BM-016-036-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-015-015-N.jpg', 'path': 'img/neutralC/CFD-BM-015-015-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-017-003-N.jpg', 'path': 'img/neutralC/CFD-BF-017-003-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-249-126-N.jpg', 'path': 'img/neutralC/CFD-WF-249-126-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-207-024-N.jpg', 'path': 'img/neutralC/CFD-BM-207-024-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-253-004-N.jpg', 'path': 'img/neutralC/CFD-BM-253-004-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-209-048-N.jpg', 'path': 'img/neutralC/CFD-AM-209-048-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-637-007-N.jpg', 'path': 'img/neutralC/CFD-IM-637-007-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-708-362-N.jpg', 'path': 'img/neutralC/CFD-IM-708-362-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-215-247-N.jpg', 'path': 'img/neutralC/CFD-LM-215-247-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-214-165-N.jpg', 'path': 'img/neutralC/CFD-LM-214-165-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-202-079-N.jpg', 'path': 'img/neutralC/CFD-AM-202-079-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-221-002-N.jpg', 'path': 'img/neutralC/CFD-LF-221-002-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-332-014-N.jpg', 'path': 'img/neutralC/CFD-MF-332-014-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-030-002-N.jpg', 'path': 'img/neutralC/CFD-WF-030-002-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-356-017-N.jpg', 'path': 'img/neutralC/CFD-MF-356-017-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-218-183-N.jpg', 'path': 'img/neutralC/CFD-LM-218-183-N.jpg'},
    {'name': 'a_halfV_trialTable_10.csv', 'path': 'a_halfV_trialTable_10.csv'},
    {'name': 'img/neutralC/CFD-BF-219-137-N.jpg', 'path': 'img/neutralC/CFD-BF-219-137-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-245-166-N.jpg', 'path': 'img/neutralC/CFD-LF-245-166-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-222-239-N.jpg', 'path': 'img/neutralC/CFD-LM-222-239-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-242-002-N.jpg', 'path': 'img/neutralC/CFD-LM-242-002-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-313-002-N.jpg', 'path': 'img/neutralC/CFD-MM-313-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-219-038-N.jpg', 'path': 'img/neutralC/CFD-WF-219-038-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-017-003-N.jpg', 'path': 'img/neutralC/CFD-WF-017-003-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-228-145-N.jpg', 'path': 'img/neutralC/CFD-BM-228-145-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-234-208-N.jpg', 'path': 'img/neutralC/CFD-AF-234-208-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-250-167-N.jpg', 'path': 'img/neutralC/CFD-WF-250-167-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-220-161-N.jpg', 'path': 'img/neutralC/CFD-BF-220-161-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-017-021-N.jpg', 'path': 'img/neutralC/CFD-BM-017-021-N.jpg'},
    {'name': 'surpriseBlock_select_A.xlsx', 'path': 'surpriseBlock_select_A.xlsx'},
    {'name': 'img/neutralC/CFD-MM-323-053-N.jpg', 'path': 'img/neutralC/CFD-MM-323-053-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-239-136-N.jpg', 'path': 'img/neutralC/CFD-BM-239-136-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-204-003-N.jpg', 'path': 'img/neutralC/CFD-BM-204-003-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-659-359-N.jpg', 'path': 'img/neutralC/CFD-IM-659-359-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-661-254-N.jpg', 'path': 'img/neutralC/CFD-IM-661-254-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-642-295-N.jpg', 'path': 'img/neutralC/CFD-IF-642-295-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-256-138-N.jpg', 'path': 'img/neutralC/CFD-WM-256-138-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-051-035-N.jpg', 'path': 'img/neutralC/CFD-BF-051-035-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-359-019-N.jpg', 'path': 'img/neutralC/CFD-MF-359-019-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-640-009-N.jpg', 'path': 'img/neutralC/CFD-IM-640-009-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-351-017-N.jpg', 'path': 'img/neutralC/CFD-MF-351-017-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-253-130-N.jpg', 'path': 'img/neutralC/CFD-AF-253-130-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-020-002-N.jpg', 'path': 'img/neutralC/CFD-BF-020-002-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-614-107-N.jpg', 'path': 'img/neutralC/CFD-IF-614-107-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-709-103-N.jpg', 'path': 'img/neutralC/CFD-IM-709-103-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-023-029-N.jpg', 'path': 'img/neutralC/CFD-BM-023-029-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-672-305-N.jpg', 'path': 'img/neutralC/CFD-IF-672-305-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-211-174-N.jpg', 'path': 'img/neutralC/CFD-BM-211-174-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-018-017-N.jpg', 'path': 'img/neutralC/CFD-WF-018-017-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-229-129-N.jpg', 'path': 'img/neutralC/CFD-WM-229-129-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-226-119-N.jpg', 'path': 'img/neutralC/CFD-BF-226-119-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-028-003-N.jpg', 'path': 'img/neutralC/CFD-WM-028-003-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-222-057-N.jpg', 'path': 'img/neutralC/CFD-WM-222-057-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-006-002-N.jpg', 'path': 'img/neutralC/CFD-WM-006-002-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-247-179-N.jpg', 'path': 'img/neutralC/CFD-BF-247-179-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-357-002-N.jpg', 'path': 'img/neutralC/CFD-MF-357-002-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-324-031-N.jpg', 'path': 'img/neutralC/CFD-MF-324-031-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-217-082-N.jpg', 'path': 'img/neutralC/CFD-BM-217-082-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-008-002-N.jpg', 'path': 'img/neutralC/CFD-WF-008-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-235-147-N.jpg', 'path': 'img/neutralC/CFD-WM-235-147-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-015-002-N.jpg', 'path': 'img/neutralC/CFD-WM-015-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-015-006-N.jpg', 'path': 'img/neutralC/CFD-WF-015-006-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-313-002-N.jpg', 'path': 'img/neutralC/CFD-MF-313-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-020-002-N.jpg', 'path': 'img/neutralC/CFD-WF-020-002-N.jpg'},
    {'name': 'img/cover_background.png', 'path': 'img/cover_background.png'},
    {'name': 'img/neutralC/CFD-WF-007-001-N.jpg', 'path': 'img/neutralC/CFD-WF-007-001-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-218-085-N.jpg', 'path': 'img/neutralC/CFD-AM-218-085-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-250-149-N.jpg', 'path': 'img/neutralC/CFD-AM-250-149-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-029-024-N.jpg', 'path': 'img/neutralC/CFD-BM-029-024-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-303-002-N.jpg', 'path': 'img/neutralC/CFD-MM-303-002-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-244-222-N.jpg', 'path': 'img/neutralC/CFD-AM-244-222-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-683-231-N.jpg', 'path': 'img/neutralC/CFD-IM-683-231-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-255-088-N.jpg', 'path': 'img/neutralC/CFD-LF-255-088-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-675-015-N.jpg', 'path': 'img/neutralC/CFD-IM-675-015-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-200-228-N.jpg', 'path': 'img/neutralC/CFD-AF-200-228-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-607-018-N.jpg', 'path': 'img/neutralC/CFD-IM-607-018-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-245-143-N.jpg', 'path': 'img/neutralC/CFD-AF-245-143-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-039-031-N.jpg', 'path': 'img/neutralC/CFD-BF-039-031-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-209-111-N.jpg', 'path': 'img/neutralC/CFD-LM-209-111-N.jpg'},
    {'name': 'blockSelect_practice.csv', 'path': 'blockSelect_practice.csv'},
    {'name': 'img/neutralC/CFD-MF-319-016-N.jpg', 'path': 'img/neutralC/CFD-MF-319-016-N.jpg'},
    {'name': 'a_halfV_trialTable_4.csv', 'path': 'a_halfV_trialTable_4.csv'},
    {'name': 'img/neutralC/CFD-LM-219-295-N.jpg', 'path': 'img/neutralC/CFD-LM-219-295-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-330-001-N.jpg', 'path': 'img/neutralC/CFD-MF-330-001-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-616-214-N.jpg', 'path': 'img/neutralC/CFD-IM-616-214-N.jpg'},
    {'name': 'a_halfV_trialTable_11.csv', 'path': 'a_halfV_trialTable_11.csv'},
    {'name': 'img/neutralC/CFD-WF-239-155-N.jpg', 'path': 'img/neutralC/CFD-WF-239-155-N.jpg'},
    {'name': 'a_halfV_trialTable_7.csv', 'path': 'a_halfV_trialTable_7.csv'},
    {'name': 'img/neutralC/CFD-WF-228-196-N.jpg', 'path': 'img/neutralC/CFD-WF-228-196-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-208-143-N.jpg', 'path': 'img/neutralC/CFD-AM-208-143-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-252-114-N.jpg', 'path': 'img/neutralC/CFD-AM-252-114-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-011-002-N.jpg', 'path': 'img/neutralC/CFD-BF-011-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-201-063-N.jpg', 'path': 'img/neutralC/CFD-WM-201-063-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-033-028-N.jpg', 'path': 'img/neutralC/CFD-BF-033-028-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-228-188-N.jpg', 'path': 'img/neutralC/CFD-LM-228-188-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-212-066-N.jpg', 'path': 'img/neutralC/CFD-LF-212-066-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-204-067-N.jpg', 'path': 'img/neutralC/CFD-AF-204-067-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-247-084-N.jpg', 'path': 'img/neutralC/CFD-WM-247-084-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-018-039-N.jpg', 'path': 'img/neutralC/CFD-BF-018-039-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-725-142-N.jpg', 'path': 'img/neutralC/CFD-IM-725-142-N.jpg'},
    {'name': 'a_halfV_trialTable_8.csv', 'path': 'a_halfV_trialTable_8.csv'},
    {'name': 'img/neutralC/CFD-BM-019-002-N.jpg', 'path': 'img/neutralC/CFD-BM-019-002-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-670-215-N.jpg', 'path': 'img/neutralC/CFD-IM-670-215-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-617-174-N.jpg', 'path': 'img/neutralC/CFD-IM-617-174-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-212-050-N.jpg', 'path': 'img/neutralC/CFD-AM-212-050-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-048-002-N.jpg', 'path': 'img/neutralC/CFD-BF-048-002-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-237-190-N.jpg', 'path': 'img/neutralC/CFD-LF-237-190-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-012-002-N.jpg', 'path': 'img/neutralC/CFD-WF-012-002-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-217-085-N.jpg', 'path': 'img/neutralC/CFD-AM-217-085-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-227-207-N.jpg', 'path': 'img/neutralC/CFD-AF-227-207-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-303-013-N.jpg', 'path': 'img/neutralC/CFD-MF-303-013-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-234-139-N.jpg', 'path': 'img/neutralC/CFD-LF-234-139-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-213-031-N.jpg', 'path': 'img/neutralC/CFD-WF-213-031-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-029-002-N.jpg', 'path': 'img/neutralC/CFD-WF-029-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-006-002-N.jpg', 'path': 'img/neutralC/CFD-WF-006-002-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-705-196-N.jpg', 'path': 'img/neutralC/CFD-IF-705-196-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-244-163-N.jpg', 'path': 'img/neutralC/CFD-WF-244-163-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-325-002-N.jpg', 'path': 'img/neutralC/CFD-MF-325-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-225-127-N.jpg', 'path': 'img/neutralC/CFD-WM-225-127-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-037-022-N.jpg', 'path': 'img/neutralC/CFD-BF-037-022-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-634-382-N.jpg', 'path': 'img/neutralC/CFD-IF-634-382-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-224-002-N.jpg', 'path': 'img/neutralC/CFD-BF-224-002-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-208-127-N.jpg', 'path': 'img/neutralC/CFD-LF-208-127-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-018-001-N.jpg', 'path': 'img/neutralC/CFD-BM-018-001-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-030-003-N.jpg', 'path': 'img/neutralC/CFD-BM-030-003-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-694-297-N.jpg', 'path': 'img/neutralC/CFD-IM-694-297-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-034-031-N.jpg', 'path': 'img/neutralC/CFD-BM-034-031-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-251-124-N.jpg', 'path': 'img/neutralC/CFD-AM-251-124-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-037-033-N.jpg', 'path': 'img/neutralC/CFD-BM-037-033-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-021-013-N.jpg', 'path': 'img/neutralC/CFD-BF-021-013-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-604-014-N.jpg', 'path': 'img/neutralC/CFD-IM-604-014-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-218-074-N.jpg', 'path': 'img/neutralC/CFD-WM-218-074-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-251-093-N.jpg', 'path': 'img/neutralC/CFD-AF-251-093-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-018-002-N.jpg', 'path': 'img/neutralC/CFD-WM-018-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-255-219-N.jpg', 'path': 'img/neutralC/CFD-WM-255-219-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-638-250-1-N.jpg', 'path': 'img/neutralC/CFD-IM-638-250-1-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-040-002-N.jpg', 'path': 'img/neutralC/CFD-BM-040-002-N.jpg'},
    {'name': 'a_halfV_trialTable_1.csv', 'path': 'a_halfV_trialTable_1.csv'},
    {'name': 'img/neutralC/CFD-WF-233-112-N.jpg', 'path': 'img/neutralC/CFD-WF-233-112-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-245-084-N.jpg', 'path': 'img/neutralC/CFD-WF-245-084-N.jpg'},
    {'name': 'half_surp_table1.csv', 'path': 'half_surp_table1.csv'},
    {'name': 'img/neutralC/CFD-WM-223-056-N.jpg', 'path': 'img/neutralC/CFD-WM-223-056-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-251-014-N.jpg', 'path': 'img/neutralC/CFD-WF-251-014-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-037-029-N.jpg', 'path': 'img/neutralC/CFD-WF-037-029-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-214-122-N.jpg', 'path': 'img/neutralC/CFD-WF-214-122-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-354-067-N.jpg', 'path': 'img/neutralC/CFD-MF-354-067-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-254-152-N.jpg', 'path': 'img/neutralC/CFD-WM-254-152-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-025-035-N.jpg', 'path': 'img/neutralC/CFD-BM-025-035-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-236-163-N.jpg', 'path': 'img/neutralC/CFD-LM-236-163-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-223-183-N.jpg', 'path': 'img/neutralC/CFD-AF-223-183-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-216-121-N.jpg', 'path': 'img/neutralC/CFD-LF-216-121-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-682-019-N.jpg', 'path': 'img/neutralC/CFD-IM-682-019-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-043-071-N.jpg', 'path': 'img/neutralC/CFD-BM-043-071-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-247-240-N.jpg', 'path': 'img/neutralC/CFD-BM-247-240-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-027-003-N.jpg', 'path': 'img/neutralC/CFD-WF-027-003-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-201-076-N.jpg', 'path': 'img/neutralC/CFD-AM-201-076-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-002-013-N.jpg', 'path': 'img/neutralC/CFD-BM-002-013-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-249-132-N.jpg', 'path': 'img/neutralC/CFD-LF-249-132-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-229-164-N.jpg', 'path': 'img/neutralC/CFD-LF-229-164-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-231-155-N.jpg', 'path': 'img/neutralC/CFD-BM-231-155-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-001-014-N.jpg', 'path': 'img/neutralC/CFD-WM-001-014-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-307-002-N.jpg', 'path': 'img/neutralC/CFD-MF-307-002-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-222-147-N.jpg', 'path': 'img/neutralC/CFD-LF-222-147-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-306-010-N.jpg', 'path': 'img/neutralC/CFD-MM-306-010-N.jpg'},
    {'name': 'half_surp_table2.csv', 'path': 'half_surp_table2.csv'},
    {'name': 'img/neutralC/CFD-AM-243-212-N.jpg', 'path': 'img/neutralC/CFD-AM-243-212-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-641-504-N.jpg', 'path': 'img/neutralC/CFD-IF-641-504-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-221-091-N.jpg', 'path': 'img/neutralC/CFD-WM-221-091-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-248-036-N.jpg', 'path': 'img/neutralC/CFD-WM-248-036-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-671-601-N.jpg', 'path': 'img/neutralC/CFD-IM-671-601-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-221-223-N.jpg', 'path': 'img/neutralC/CFD-BF-221-223-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-232-199-N.jpg', 'path': 'img/neutralC/CFD-LF-232-199-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-039-018-N.jpg', 'path': 'img/neutralC/CFD-WM-039-018-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-202-065-N.jpg', 'path': 'img/neutralC/CFD-LF-202-065-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-216-082-N.jpg', 'path': 'img/neutralC/CFD-LM-216-082-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-239-148-N.jpg', 'path': 'img/neutralC/CFD-LF-239-148-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-226-234-N.jpg', 'path': 'img/neutralC/CFD-AM-226-234-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-238-154-N.jpg', 'path': 'img/neutralC/CFD-LF-238-154-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-247-165-N.jpg', 'path': 'img/neutralC/CFD-AM-247-165-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-733-110-N.jpg', 'path': 'img/neutralC/CFD-IF-733-110-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-229-187-N.jpg', 'path': 'img/neutralC/CFD-LM-229-187-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-308-001-N.jpg', 'path': 'img/neutralC/CFD-MF-308-001-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-034-030-N.jpg', 'path': 'img/neutralC/CFD-WM-034-030-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-666-372-N.jpg', 'path': 'img/neutralC/CFD-IM-666-372-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-302-002-N.jpg', 'path': 'img/neutralC/CFD-MM-302-002-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-305-014-N.jpg', 'path': 'img/neutralC/CFD-MF-305-014-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-305-003-N.jpg', 'path': 'img/neutralC/CFD-MM-305-003-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-041-035-N.jpg', 'path': 'img/neutralC/CFD-BM-041-035-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-690-282-N.jpg', 'path': 'img/neutralC/CFD-IM-690-282-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-706-002-N.jpg', 'path': 'img/neutralC/CFD-IM-706-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-023-003-N.jpg', 'path': 'img/neutralC/CFD-WF-023-003-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-200-099-N.jpg', 'path': 'img/neutralC/CFD-WF-200-099-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-230-150-N.jpg', 'path': 'img/neutralC/CFD-AM-230-150-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-214-075-N.jpg', 'path': 'img/neutralC/CFD-BM-214-075-N.jpg'},
    {'name': 'a_halfV_trialTable_2.csv', 'path': 'a_halfV_trialTable_2.csv'},
    {'name': 'img/neutralC/CFD-LM-203-026-N.jpg', 'path': 'img/neutralC/CFD-LM-203-026-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-243-175-N.jpg', 'path': 'img/neutralC/CFD-LF-243-175-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-222-173-N.jpg', 'path': 'img/neutralC/CFD-BM-222-173-N.jpg'},
    {'name': 'a_halfV_trialTable_3.csv', 'path': 'a_halfV_trialTable_3.csv'},
    {'name': 'img/neutralC/CFD-AF-201-060-N.jpg', 'path': 'img/neutralC/CFD-AF-201-060-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-046-006-N.jpg', 'path': 'img/neutralC/CFD-BM-046-006-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-252-159-N.jpg', 'path': 'img/neutralC/CFD-WF-252-159-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-007-001-N.jpg', 'path': 'img/neutralC/CFD-BF-007-001-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-729-393-N.jpg', 'path': 'img/neutralC/CFD-IF-729-393-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-676-017-N.jpg', 'path': 'img/neutralC/CFD-IF-676-017-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-026-002-N.jpg', 'path': 'img/neutralC/CFD-BM-026-002-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-232-078-N.jpg', 'path': 'img/neutralC/CFD-AF-232-078-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-038-001-N.jpg', 'path': 'img/neutralC/CFD-BM-038-001-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-226-276-N.jpg', 'path': 'img/neutralC/CFD-BM-226-276-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-246-087-N.jpg', 'path': 'img/neutralC/CFD-WF-246-087-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-239-180-N.jpg', 'path': 'img/neutralC/CFD-BF-239-180-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-253-161-N.jpg', 'path': 'img/neutralC/CFD-AM-253-161-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-623-129-N.jpg', 'path': 'img/neutralC/CFD-IF-623-129-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-245-178-N.jpg', 'path': 'img/neutralC/CFD-BF-245-178-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-312-002-N.jpg', 'path': 'img/neutralC/CFD-MF-312-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-205-006-N.jpg', 'path': 'img/neutralC/CFD-WF-205-006-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-688-322-N.jpg', 'path': 'img/neutralC/CFD-IM-688-322-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-673-389-N.jpg', 'path': 'img/neutralC/CFD-IF-673-389-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-216-132-N.jpg', 'path': 'img/neutralC/CFD-BF-216-132-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-602-134-N.jpg', 'path': 'img/neutralC/CFD-IF-602-134-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-205-100-N.jpg', 'path': 'img/neutralC/CFD-LF-205-100-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-301-024-N.jpg', 'path': 'img/neutralC/CFD-MF-301-024-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-208-110-N.jpg', 'path': 'img/neutralC/CFD-LM-208-110-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-618-212-N.jpg', 'path': 'img/neutralC/CFD-IF-618-212-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-665-015-N.jpg', 'path': 'img/neutralC/CFD-IF-665-015-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-324-069-N.jpg', 'path': 'img/neutralC/CFD-MM-324-069-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-224-026-N.jpg', 'path': 'img/neutralC/CFD-AF-224-026-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-720-014-N.jpg', 'path': 'img/neutralC/CFD-IM-720-014-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-697-015-N.jpg', 'path': 'img/neutralC/CFD-IM-697-015-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-020-001-N.jpg', 'path': 'img/neutralC/CFD-WM-020-001-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-326-016-N.jpg', 'path': 'img/neutralC/CFD-MF-326-016-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-234-086-N.jpg', 'path': 'img/neutralC/CFD-WF-234-086-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-240-013-N.jpg', 'path': 'img/neutralC/CFD-LM-240-013-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-669-111-N.jpg', 'path': 'img/neutralC/CFD-IM-669-111-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-001-014-N.jpg', 'path': 'img/neutralC/CFD-BM-001-014-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-032-001-N.jpg', 'path': 'img/neutralC/CFD-WM-032-001-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-339-002-N.jpg', 'path': 'img/neutralC/CFD-MF-339-002-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-727-195-N.jpg', 'path': 'img/neutralC/CFD-IM-727-195-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-038-003-N.jpg', 'path': 'img/neutralC/CFD-WM-038-003-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-648-337-N.jpg', 'path': 'img/neutralC/CFD-IM-648-337-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-325-002-N.jpg', 'path': 'img/neutralC/CFD-MM-325-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-227-002-N.jpg', 'path': 'img/neutralC/CFD-WF-227-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-229-004-N.jpg', 'path': 'img/neutralC/CFD-WF-229-004-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-250-169-N.jpg', 'path': 'img/neutralC/CFD-LF-250-169-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-315-013-N.jpg', 'path': 'img/neutralC/CFD-MM-315-013-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-208-003-N.jpg', 'path': 'img/neutralC/CFD-AF-208-003-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-220-329-N.jpg', 'path': 'img/neutralC/CFD-LM-220-329-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-013-001-N.jpg', 'path': 'img/neutralC/CFD-BF-013-001-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-681-253-N.jpg', 'path': 'img/neutralC/CFD-IM-681-253-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-678-482-N.jpg', 'path': 'img/neutralC/CFD-IM-678-482-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-031-002-N.jpg', 'path': 'img/neutralC/CFD-BF-031-002-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-238-269-N.jpg', 'path': 'img/neutralC/CFD-AM-238-269-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-009-002-N.jpg', 'path': 'img/neutralC/CFD-WM-009-002-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-236-145-N.jpg', 'path': 'img/neutralC/CFD-AF-236-145-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-252-191-N.jpg', 'path': 'img/neutralC/CFD-BF-252-191-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-689-263-N.jpg', 'path': 'img/neutralC/CFD-IM-689-263-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-322-002-N.jpg', 'path': 'img/neutralC/CFD-MM-322-002-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-310-027-N.jpg', 'path': 'img/neutralC/CFD-MF-310-027-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-209-088-N.jpg', 'path': 'img/neutralC/CFD-BM-209-088-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-210-156-N.jpg', 'path': 'img/neutralC/CFD-LM-210-156-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-656-273-N.jpg', 'path': 'img/neutralC/CFD-IM-656-273-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-228-173-N.jpg', 'path': 'img/neutralC/CFD-AF-228-173-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-346-008-N.jpg', 'path': 'img/neutralC/CFD-MF-346-008-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-203-066-N.jpg', 'path': 'img/neutralC/CFD-LF-203-066-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-227-137-N.jpg', 'path': 'img/neutralC/CFD-BF-227-137-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-208-266-N.jpg', 'path': 'img/neutralC/CFD-BF-208-266-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-249-001-N.jpg', 'path': 'img/neutralC/CFD-LM-249-001-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-256-160-N.jpg', 'path': 'img/neutralC/CFD-AF-256-160-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-221-216-N.jpg', 'path': 'img/neutralC/CFD-LM-221-216-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-214-168-N.jpg', 'path': 'img/neutralC/CFD-AM-214-168-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-248-148-N.jpg', 'path': 'img/neutralC/CFD-AF-248-148-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-227-191-N.jpg', 'path': 'img/neutralC/CFD-BM-227-191-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-240-179-N.jpg', 'path': 'img/neutralC/CFD-BF-240-179-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-686-097-N.jpg', 'path': 'img/neutralC/CFD-IM-686-097-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-004-002-N.jpg', 'path': 'img/neutralC/CFD-BM-004-002-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-327-002-N.jpg', 'path': 'img/neutralC/CFD-MF-327-002-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-026-002-N.jpg', 'path': 'img/neutralC/CFD-WF-026-002-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-205-141-N.jpg', 'path': 'img/neutralC/CFD-BF-205-141-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-211-054-N.jpg', 'path': 'img/neutralC/CFD-WM-211-054-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-691-007-N.jpg', 'path': 'img/neutralC/CFD-IF-691-007-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-231-112-N.jpg', 'path': 'img/neutralC/CFD-WM-231-112-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-047-003-N.jpg', 'path': 'img/neutralC/CFD-BF-047-003-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-247-278-N.jpg', 'path': 'img/neutralC/CFD-AF-247-278-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-314-062-N.jpg', 'path': 'img/neutralC/CFD-MM-314-062-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-215-177-N.jpg', 'path': 'img/neutralC/CFD-BF-215-177-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-232-251-N.jpg', 'path': 'img/neutralC/CFD-AM-232-251-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-235-170-N.jpg', 'path': 'img/neutralC/CFD-AF-235-170-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-726-248-N.jpg', 'path': 'img/neutralC/CFD-IM-726-248-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-657-308-N.jpg', 'path': 'img/neutralC/CFD-IM-657-308-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-244-003-N.jpg', 'path': 'img/neutralC/CFD-WM-244-003-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-232-161-N.jpg', 'path': 'img/neutralC/CFD-WF-232-161-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-234-118-N.jpg', 'path': 'img/neutralC/CFD-WM-234-118-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-232-204-N.jpg', 'path': 'img/neutralC/CFD-LM-232-204-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-233-106-N.jpg', 'path': 'img/neutralC/CFD-WM-233-106-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-251-211-N.jpg', 'path': 'img/neutralC/CFD-BF-251-211-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-239-147-N.jpg', 'path': 'img/neutralC/CFD-AM-239-147-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-008-001-N.jpg', 'path': 'img/neutralC/CFD-BF-008-001-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-609-408-N.jpg', 'path': 'img/neutralC/CFD-IF-609-408-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-005-010-N.jpg', 'path': 'img/neutralC/CFD-WF-005-010-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-231-214-N.jpg', 'path': 'img/neutralC/CFD-LM-231-214-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-011-016-N.jpg', 'path': 'img/neutralC/CFD-BM-011-016-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-027-001-N.jpg', 'path': 'img/neutralC/CFD-BM-027-001-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-252-172-N.jpg', 'path': 'img/neutralC/CFD-LF-252-172-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-202-063-N.jpg', 'path': 'img/neutralC/CFD-BM-202-063-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-238-023-N.jpg', 'path': 'img/neutralC/CFD-WF-238-023-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-668-009-N.jpg', 'path': 'img/neutralC/CFD-IF-668-009-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-244-096-N.jpg', 'path': 'img/neutralC/CFD-LF-244-096-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-741-040-N.jpg', 'path': 'img/neutralC/CFD-IF-741-040-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-241-141-N.jpg', 'path': 'img/neutralC/CFD-AF-241-141-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-225-102-N.jpg', 'path': 'img/neutralC/CFD-AM-225-102-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-224-197-N.jpg', 'path': 'img/neutralC/CFD-WM-224-197-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-204-001-N.jpg', 'path': 'img/neutralC/CFD-LM-204-001-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-645-001-N.jpg', 'path': 'img/neutralC/CFD-IM-645-001-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-334-002-N.jpg', 'path': 'img/neutralC/CFD-MF-334-002-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-611-306-N.jpg', 'path': 'img/neutralC/CFD-IM-611-306-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-613-169-N.jpg', 'path': 'img/neutralC/CFD-IM-613-169-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-049-032-N.jpg', 'path': 'img/neutralC/CFD-BF-049-032-N.jpg'},
    {'name': 'img/neutralC/CFD-AM-228-214-N.jpg', 'path': 'img/neutralC/CFD-AM-228-214-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-202-107-N.jpg', 'path': 'img/neutralC/CFD-WM-202-107-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-204-133-N.jpg', 'path': 'img/neutralC/CFD-LF-204-133-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-348-018-N.jpg', 'path': 'img/neutralC/CFD-MF-348-018-N.jpg'},
    {'name': 'a_halfV_trialTable_9.csv', 'path': 'a_halfV_trialTable_9.csv'},
    {'name': 'img/neutralC/CFD-MF-360-106-N.jpg', 'path': 'img/neutralC/CFD-MF-360-106-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-620-218-N.jpg', 'path': 'img/neutralC/CFD-IF-620-218-N.jpg'},
    {'name': 'img/neutralC/CFD-IF-744-114-N.jpg', 'path': 'img/neutralC/CFD-IF-744-114-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-236-107-N.jpg', 'path': 'img/neutralC/CFD-WF-236-107-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-022-022-N.jpg', 'path': 'img/neutralC/CFD-BM-022-022-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-205-001-N.jpg', 'path': 'img/neutralC/CFD-BM-205-001-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-216-088-N.jpg', 'path': 'img/neutralC/CFD-BM-216-088-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-242-154-N.jpg', 'path': 'img/neutralC/CFD-BF-242-154-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-039-029-N.jpg', 'path': 'img/neutralC/CFD-BM-039-029-N.jpg'},
    {'name': 'img/neutralC/CFD-MM-304-002-N.jpg', 'path': 'img/neutralC/CFD-MM-304-002-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-711-011-N.jpg', 'path': 'img/neutralC/CFD-IM-711-011-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-225-141-N.jpg', 'path': 'img/neutralC/CFD-AF-225-141-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-041-001-N.jpg', 'path': 'img/neutralC/CFD-BF-041-001-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-208-068-N.jpg', 'path': 'img/neutralC/CFD-WF-208-068-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-606-008-N.jpg', 'path': 'img/neutralC/CFD-IM-606-008-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-237-172-N.jpg', 'path': 'img/neutralC/CFD-BF-237-172-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-316-001-N.jpg', 'path': 'img/neutralC/CFD-MF-316-001-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-019-003-N.jpg', 'path': 'img/neutralC/CFD-WM-019-003-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-243-218-N.jpg', 'path': 'img/neutralC/CFD-BM-243-218-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-235-226-N.jpg', 'path': 'img/neutralC/CFD-BM-235-226-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-234-172-N.jpg', 'path': 'img/neutralC/CFD-BM-234-172-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-349-036-N.jpg', 'path': 'img/neutralC/CFD-MF-349-036-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-233-285-N.jpg', 'path': 'img/neutralC/CFD-BM-233-285-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-247-051-N.jpg', 'path': 'img/neutralC/CFD-LF-247-051-N.jpg'},
    {'name': 'img/neutralC/CFD-MF-345-025-N.jpg', 'path': 'img/neutralC/CFD-MF-345-025-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-684-008-N.jpg', 'path': 'img/neutralC/CFD-IM-684-008-N.jpg'},
    {'name': 'img/neutralC/CFD-BF-010-001-N.jpg', 'path': 'img/neutralC/CFD-BF-010-001-N.jpg'},
    {'name': 'img/neutralC/CFD-BM-021-021-N.jpg', 'path': 'img/neutralC/CFD-BM-021-021-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-627-178-N.jpg', 'path': 'img/neutralC/CFD-IM-627-178-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-219-223-N.jpg', 'path': 'img/neutralC/CFD-LF-219-223-N.jpg'},
    {'name': 'img/neutralC/CFD-LF-253-003-N.jpg', 'path': 'img/neutralC/CFD-LF-253-003-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-200-034-N.jpg', 'path': 'img/neutralC/CFD-WM-200-034-N.jpg'},
    {'name': 'img/neutralC/CFD-WM-010-001-N.jpg', 'path': 'img/neutralC/CFD-WM-010-001-N.jpg'},
    {'name': 'half_surp_table3.csv', 'path': 'half_surp_table3.csv'},
    {'name': 'img/neutralC/CFD-IF-677-452-1-N.jpg', 'path': 'img/neutralC/CFD-IF-677-452-1-N.jpg'},
    {'name': 'img/neutralC/CFD-AF-207-023-N.jpg', 'path': 'img/neutralC/CFD-AF-207-023-N.jpg'},
    {'name': 'img/neutralC/CFD-LM-250-077-N.jpg', 'path': 'img/neutralC/CFD-LM-250-077-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-024-003-N.jpg', 'path': 'img/neutralC/CFD-WF-024-003-N.jpg'},
    {'name': 'img/neutralC/CFD-WF-207-014-N.jpg', 'path': 'img/neutralC/CFD-WF-207-014-N.jpg'},
    {'name': 'img/neutralC/CFD-IM-740-273-N.jpg', 'path': 'img/neutralC/CFD-IM-740-273-N.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.2';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["id"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var JS_codeClock;
var shuffle;
var setupClock;
var welcomeClock;
var welcome_text;
var welcome_keyResp;
var instructRightClock;
var instructRight_text;
var instructRight_centerImg;
var instructRight_rightImg1;
var instructRight_leftImg1;
var instructRight_rightImg2;
var instructRight_leftImg2;
var insructRight_keyResp;
var instructLeftClock;
var instructLeft_text;
var instructLeft_centerImg;
var instructLeft_rightImg1;
var instructLeft_leftImg1;
var instructLeft_rightImg2;
var instructLeft_leftImg2;
var instructLeft_keyResp;
var instructInconRightClock;
var instructInconRight_text;
var instructIncon_centerImg;
var instructIncon_rightImg1;
var instructIncon_leftImg1;
var instructIncon_leftImg2;
var instructIncon_rightImg2;
var insructInconRight_keyResp;
var instructInconLeftClock;
var instructInconLeft_text;
var instructInconLeft_centerImg;
var instructInconLeft_rightImg1;
var instructInconLeft_leftImg1;
var instructInconLeft_rightImg2;
var instructInconLeft_leftImg2;
var instructInconLeft_keyResp;
var prac_blockRemindersClock;
var trialNum;
var accuracy;
var numCorr;
var blockAcc;
var prac_blockText;
var prac_reminder_text;
var prac_reminder_keyResp;
var initFixationClock;
var initFixation_img;
var prac_stimRoutineClock;
var bigFace;
var cover_background_2;
var prac_centerImg;
var prac_rightImg1;
var prac_rightImg2;
var prac_leftImg1;
var prac_leftImg2;
var prac_fixImg;
var prac_stim_keyResp;
var prac_blockFeedClock;
var prac_blockFeed_text;
var prac_pressContinue;
var prac_blockFeed_keyResp;
var redCap1Clock;
var redCap1_text;
var redcap1_key;
var task_blockRemindersClock;
var blockCounter;
var task_blockText;
var task_blockReminders_text;
var task_blockReminders_keyResp;
var task_stimRoutineClock;
var bigFace_2;
var cover_background;
var task_centerImg;
var task_rightImg1;
var task_rightImg2;
var task_leftImg1;
var task_leftImg2;
var task_fixImg;
var task1_stim_keyResp;
var task_blockFeedClock;
var task_blockFeed_text;
var task_blockFeed_text2;
var task_blockFeed_keyResp;
var fixation1Clock;
var fix;
var errorNumbersClock;
var errorNumbers_text_2;
var errorNum_text_box;
var errorN_key_resp_2;
var errorPercentageClock;
var errorNumbers_text_3;
var errorPercent_text_box;
var errorN_key_resp_3;
var botherRateClock;
var botherRate_text;
var bother_text_box;
var botherRate_key_resp;
var redCap2Clock;
var redCap2_tex;
var redcap2_key;
var surpriseInstructClock;
var instruct_surprise1;
var instruct_surp1_key_resp;
var instructSurpriseTask2_2Clock;
var surp_blockCounter;
var task_blockText_2;
var instructMainTask_text;
var instructMainTask_keyResp;
var surpriseTaskClock;
var stimulus;
var instructsurpA1_right;
var instructsurpA2_left;
var surprise_key_resp;
var redCap3Clock;
var redCap3_text;
var redcap1_key_2;
var finishMessageClock;
var finishMessage_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "JS_code"
  JS_codeClock = new util.Clock();
  // shuffle is push in JS so defining shuffle for our JS experiment code
  shuffle = util.shuffle;
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  // Run 'Begin Experiment' code from setup_code
  psychoJS.window.mouseVisible = false;
  
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: "Arrow Game\n\nWelcome to the arrow game. In this game, arrows will be quickly flashed on the screen. Your goal is to respond to the direction of the MIDDLE arrow, and to respond as quickly as you can without making mistakes. \n\nIf the MIDDLE arrow is pointing to the right, use your right hand to press the 'K' key on your keyboard. If the MIDDLE arrow is pointing to the left, use your left hand to press the 'S' key on your keyboard. \n\nPress the 'K' key to continue\n",
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  welcome_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructRight"
  instructRightClock = new util.Clock();
  instructRight_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructRight_text',
    text: "Below, the MIDDLE arrow is pointing to the right, so you would respond by pressing the 'K' key on your keyboard with your right hand.\n\nPress the 'K' key to continue",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructRight_centerImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructRight_centerImg', units : undefined, 
    image : 'img/rightArrow.png', mask : undefined,
    ori : 0, pos : [0, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  instructRight_rightImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructRight_rightImg1', units : undefined, 
    image : 'img/rightArrow.png', mask : undefined,
    ori : 0, pos : [0.03, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  instructRight_leftImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructRight_leftImg1', units : undefined, 
    image : 'img/rightArrow.png', mask : undefined,
    ori : 0, pos : [(- 0.03), (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  instructRight_rightImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructRight_rightImg2', units : undefined, 
    image : 'img/rightArrow.png', mask : undefined,
    ori : 0, pos : [0.06, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  instructRight_leftImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructRight_leftImg2', units : undefined, 
    image : 'img/rightArrow.png', mask : undefined,
    ori : 0, pos : [(- 0.06), (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  insructRight_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructLeft"
  instructLeftClock = new util.Clock();
  instructLeft_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructLeft_text',
    text: "Below, the MIDDLE arrow is pointing to the left, so you would respond by pressing the 'S' key on your keyboard with your left hand.\n\nPress the 'S' key to continue",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructLeft_centerImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructLeft_centerImg', units : undefined, 
    image : 'img/leftArrow.png', mask : undefined,
    ori : 0, pos : [0, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  instructLeft_rightImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructLeft_rightImg1', units : undefined, 
    image : 'img/leftArrow.png', mask : undefined,
    ori : 0, pos : [0.03, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  instructLeft_leftImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructLeft_leftImg1', units : undefined, 
    image : 'img/leftArrow.png', mask : undefined,
    ori : 0, pos : [(- 0.03), (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  instructLeft_rightImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructLeft_rightImg2', units : undefined, 
    image : 'img/leftArrow.png', mask : undefined,
    ori : 0, pos : [0.06, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  instructLeft_leftImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructLeft_leftImg2', units : undefined, 
    image : 'img/leftArrow.png', mask : undefined,
    ori : 0, pos : [(- 0.06), (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  instructLeft_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructInconRight"
  instructInconRightClock = new util.Clock();
  instructInconRight_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructInconRight_text',
    text: "Sometimes the MIDDLE arrow will point in a different direction from the other arrows. However, your goal is to always respond based on the direction of the MIDDLE arrow.\n\nBelow, the MIDDLE arrow is pointing to the right, so you would respond by pressing the 'K' key on your keyboard with your right hand.\n\nPress the 'K' key to continue",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructIncon_centerImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructIncon_centerImg', units : undefined, 
    image : 'img/rightArrow.png', mask : undefined,
    ori : 0, pos : [0, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  instructIncon_rightImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructIncon_rightImg1', units : undefined, 
    image : 'img/leftArrow.png', mask : undefined,
    ori : 0, pos : [0.03, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  instructIncon_leftImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructIncon_leftImg1', units : undefined, 
    image : 'img/leftArrow.png', mask : undefined,
    ori : 0, pos : [(- 0.03), (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  instructIncon_leftImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructIncon_leftImg2', units : undefined, 
    image : 'img/leftArrow.png', mask : undefined,
    ori : 0, pos : [(- 0.06), (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  instructIncon_rightImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructIncon_rightImg2', units : undefined, 
    image : 'img/leftArrow.png', mask : undefined,
    ori : 0, pos : [0.06, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  insructInconRight_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructInconLeft"
  instructInconLeftClock = new util.Clock();
  instructInconLeft_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructInconLeft_text',
    text: "Below, the MIDDLE arrow is pointing to the left, so you would respond by pressing the 'S' key on your keyboard with your left hand.\n\n\nPress the 'S' key to continue",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructInconLeft_centerImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructInconLeft_centerImg', units : undefined, 
    image : 'img/leftArrow.png', mask : undefined,
    ori : 0, pos : [0, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  instructInconLeft_rightImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructInconLeft_rightImg1', units : undefined, 
    image : 'img/rightArrow.png', mask : undefined,
    ori : 0, pos : [0.03, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  instructInconLeft_leftImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructInconLeft_leftImg1', units : undefined, 
    image : 'img/rightArrow.png', mask : undefined,
    ori : 0, pos : [(- 0.03), (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  instructInconLeft_rightImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructInconLeft_rightImg2', units : undefined, 
    image : 'img/rightArrow.png', mask : undefined,
    ori : 0, pos : [0.06, (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  instructInconLeft_leftImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructInconLeft_leftImg2', units : undefined, 
    image : 'img/rightArrow.png', mask : undefined,
    ori : 0, pos : [(- 0.06), (- 0.3)], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  instructInconLeft_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_blockReminders"
  prac_blockRemindersClock = new util.Clock();
  // Run 'Begin Experiment' code from prac_initAcc_code
  trialNum = 0;
  accuracy = 0;
  numCorr = 0;
  blockAcc = 0;
  
  prac_blockText = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_blockText',
    text: 'Practice',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  prac_reminder_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_reminder_text',
    text: "You will now practice responding to the arrows. Remember to always respond to the direction of the MIDDLE arrow.\n\nRespond as quickly as you can without making mistakes.\n\nTo get ready, rest your right and left index fingers on the 'K' and 'S' keys of your keyboard, then press the 'K' key when you are ready to begin.\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  prac_reminder_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "initFixation"
  initFixationClock = new util.Clock();
  initFixation_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'initFixation_img', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.015)], size : [0.26, 0.22],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "prac_stimRoutine"
  prac_stimRoutineClock = new util.Clock();
  bigFace = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bigFace', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.0], size : [0.4267, 0.3],
    color : new util.Color([1,1,1]), opacity : 0.85,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  cover_background_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cover_background_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.015)], size : [0.26, 0.22],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  prac_centerImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_centerImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  prac_rightImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_rightImg1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  prac_rightImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_rightImg2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  prac_leftImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_leftImg1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  prac_leftImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_leftImg2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -7.0 
  });
  prac_fixImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_fixImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.015)], size : [0.26, 0.22],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -8.0 
  });
  prac_stim_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_blockFeed"
  prac_blockFeedClock = new util.Clock();
  prac_blockFeed_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_blockFeed_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  prac_pressContinue = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_pressContinue',
    text: "Press the 'K' key",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  prac_blockFeed_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "redCap1"
  redCap1Clock = new util.Clock();
  redCap1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'redCap1_text',
    text: "\nPlease return to the questionnaires tab of your browser and answer the questions of a questionnaire.\n\nPlease do not close this tab as you will need to return to this tab after you complete answering the questions of the questionnaire. \n\n-----------------------------------------\n\nDid you answer the questions of the questionnaire?\n\nIf yes, please press the 'K' key to continue\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  redcap1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_blockReminders"
  task_blockRemindersClock = new util.Clock();
  // Run 'Begin Experiment' code from task_blockReminder_code
  blockCounter = 0;
  
  task_blockText = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_blockText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  task_blockReminders_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_blockReminders_text',
    text: "Remember to always respond to the direction of the MIDDLE arrow.\n\nRespond as quickly as you can without making mistakes.\n\nTo get ready, rest your right and left index fingers on the 'K' and 'S' keys of your keyboard, then press the 'K' key when you are ready to begin.\n\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  task_blockReminders_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_stimRoutine"
  task_stimRoutineClock = new util.Clock();
  bigFace_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bigFace_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.0], size : [0.4267, 0.3],
    color : new util.Color([1,1,1]), opacity : 0.85,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  cover_background = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cover_background', units : undefined, 
    image : 'img/cover_background.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.015)], size : [0.26, 0.22],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  task_centerImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'task_centerImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  task_rightImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'task_rightImg1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  task_rightImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'task_rightImg2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  task_leftImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'task_leftImg1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  task_leftImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'task_leftImg2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -7.0 
  });
  task_fixImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'task_fixImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.015)], size : [0.26, 0.22],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -8.0 
  });
  task1_stim_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_blockFeed"
  task_blockFeedClock = new util.Clock();
  task_blockFeed_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_blockFeed_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.12,  wrapWidth: 1.8, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  task_blockFeed_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_blockFeed_text2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  task_blockFeed_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation1"
  fixation1Clock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "errorNumbers"
  errorNumbersClock = new util.Clock();
  errorNumbers_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'errorNumbers_text_2',
    text: "Excluding the practice, How many errors do you think you made in this game?\n\nPlease provide a number as your best estimate.\n\n\nPlease enter your answer using the keyboard. \nAfter entering your answer, press the 'Space' key to continue",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.12], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  errorNum_text_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'errorNum_text_box',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.3)], letterHeight: 0.05,
    size: [0.2, 0.2],  units: undefined, 
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'bottom-center',
    depth: -2.0 
  });
  
  errorN_key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "errorPercentage"
  errorPercentageClock = new util.Clock();
  errorNumbers_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'errorNumbers_text_3',
    text: "Excluding the practice, what percentage of your responses do you think were errors during the arrow game? \n\nPlease provide a number as your best estimate.\n\nPlease enter your answer using the keyboard. \nAfter entering your answer, press the 'Space' key to continue",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.12], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  errorPercent_text_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'errorPercent_text_box',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.3)], letterHeight: 0.05,
    size: [0.2, 0.2],  units: undefined, 
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'bottom-center',
    depth: -2.0 
  });
  
  errorN_key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "botherRate"
  botherRateClock = new util.Clock();
  botherRate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'botherRate_text',
    text: "How much did it bother you when you made an error during the arrow game? \n\nYour answer should be on a scale from 0 (not at all) to 10 (very much). \n\n\nPlease enter your answer using the keyboard. \nAfter entering your answer, press the 'Space' key to continue",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.12], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  bother_text_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'bother_text_box',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.3)], letterHeight: 0.05,
    size: [0.2, 0.2],  units: undefined, 
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'bottom-center',
    depth: -2.0 
  });
  
  botherRate_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "redCap2"
  redCap2Clock = new util.Clock();
  redCap2_tex = new visual.TextStim({
    win: psychoJS.window,
    name: 'redCap2_tex',
    text: "\nPlease return to the questionnaires tab of your browser and answer the questions of two questionnaires.\n\nPlease do not close this tab as you will need to return to this tab after you complete answering the questions of the questionnaires. \n\n-----------------------------------------\n\nDid you answer the questions of the two questionnaires?\n\nIf yes, please press the 'K' key to continue\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  redcap2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "surpriseInstruct"
  surpriseInstructClock = new util.Clock();
  instruct_surprise1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_surprise1',
    text: 'You will now begin a task in which you will be shown images of faces and asked if you have seen them before or not.\n\nFor each face displayed, you must indicate whether you saw it in the previous game (OLD face) or if you did not see it in the previous game (NEW face).\n\nSo, if you think that you have seen the face displayed in the previous game, select "Old" as your response or if you think you have not seen the face in the previous game, select "New" as your response.\n\nPress the \'K\' key to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruct_surp1_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructSurpriseTask2_2"
  instructSurpriseTask2_2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  surp_blockCounter = 0;
  
  task_blockText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_blockText_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  instructMainTask_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructMainTask_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  instructMainTask_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "surpriseTask"
  surpriseTaskClock = new util.Clock();
  stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.71116667, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instructsurpA1_right = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructsurpA1_right',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  instructsurpA2_left = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructsurpA2_left',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.03)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  surprise_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "redCap3"
  redCap3Clock = new util.Clock();
  redCap3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'redCap3_text',
    text: "\nPlease return to the questionnaires tab of your browser and answer the questions of a questionnaire.\n\nPlease do not close this tab as you will need to return to this tab after you complete answering the questions of the questionnaire. \n\n-----------------------------------------\n\nDid you answer the questions of the questionnaire?\n\nIf yes, please press the 'K' key to continue\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  redcap1_key_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "finishMessage"
  finishMessageClock = new util.Clock();
  finishMessage_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'finishMessage_text',
    text: 'Thank you for your participation!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var JS_codeComponents;
function JS_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'JS_code' ---
    t = 0;
    JS_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    JS_codeComponents = [];
    
    JS_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function JS_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'JS_code' ---
    // get current time
    t = JS_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    JS_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function JS_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'JS_code' ---
    JS_codeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "JS_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var setupComponents;
function setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setup' ---
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setup' ---
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setup' ---
    setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _welcome_keyResp_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    welcome_keyResp.keys = undefined;
    welcome_keyResp.rt = undefined;
    _welcome_keyResp_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(welcome_keyResp);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }

    
    // *welcome_keyResp* updates
    if (t >= 0.0 && welcome_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_keyResp.tStart = t;  // (not accounting for frame time here)
      welcome_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcome_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcome_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcome_keyResp.clearEvents(); });
    }

    if (welcome_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome_keyResp.getKeys({keyList: ['k'], waitRelease: false});
      _welcome_keyResp_allKeys = _welcome_keyResp_allKeys.concat(theseKeys);
      if (_welcome_keyResp_allKeys.length > 0) {
        welcome_keyResp.keys = _welcome_keyResp_allKeys[_welcome_keyResp_allKeys.length - 1].name;  // just the last key pressed
        welcome_keyResp.rt = _welcome_keyResp_allKeys[_welcome_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    welcome_keyResp.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _insructRight_keyResp_allKeys;
var instructRightComponents;
function instructRightRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructRight' ---
    t = 0;
    instructRightClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    insructRight_keyResp.keys = undefined;
    insructRight_keyResp.rt = undefined;
    _insructRight_keyResp_allKeys = [];
    // keep track of which components have finished
    instructRightComponents = [];
    instructRightComponents.push(instructRight_text);
    instructRightComponents.push(instructRight_centerImg);
    instructRightComponents.push(instructRight_rightImg1);
    instructRightComponents.push(instructRight_leftImg1);
    instructRightComponents.push(instructRight_rightImg2);
    instructRightComponents.push(instructRight_leftImg2);
    instructRightComponents.push(insructRight_keyResp);
    
    instructRightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructRightRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructRight' ---
    // get current time
    t = instructRightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructRight_text* updates
    if (t >= 0.0 && instructRight_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructRight_text.tStart = t;  // (not accounting for frame time here)
      instructRight_text.frameNStart = frameN;  // exact frame index
      
      instructRight_text.setAutoDraw(true);
    }

    
    // *instructRight_centerImg* updates
    if (t >= 0.0 && instructRight_centerImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructRight_centerImg.tStart = t;  // (not accounting for frame time here)
      instructRight_centerImg.frameNStart = frameN;  // exact frame index
      
      instructRight_centerImg.setAutoDraw(true);
    }

    
    // *instructRight_rightImg1* updates
    if (t >= 0.0 && instructRight_rightImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructRight_rightImg1.tStart = t;  // (not accounting for frame time here)
      instructRight_rightImg1.frameNStart = frameN;  // exact frame index
      
      instructRight_rightImg1.setAutoDraw(true);
    }

    
    // *instructRight_leftImg1* updates
    if (t >= 0.0 && instructRight_leftImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructRight_leftImg1.tStart = t;  // (not accounting for frame time here)
      instructRight_leftImg1.frameNStart = frameN;  // exact frame index
      
      instructRight_leftImg1.setAutoDraw(true);
    }

    
    // *instructRight_rightImg2* updates
    if (t >= 0.0 && instructRight_rightImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructRight_rightImg2.tStart = t;  // (not accounting for frame time here)
      instructRight_rightImg2.frameNStart = frameN;  // exact frame index
      
      instructRight_rightImg2.setAutoDraw(true);
    }

    
    // *instructRight_leftImg2* updates
    if (t >= 0.0 && instructRight_leftImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructRight_leftImg2.tStart = t;  // (not accounting for frame time here)
      instructRight_leftImg2.frameNStart = frameN;  // exact frame index
      
      instructRight_leftImg2.setAutoDraw(true);
    }

    
    // *insructRight_keyResp* updates
    if (t >= 0.0 && insructRight_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      insructRight_keyResp.tStart = t;  // (not accounting for frame time here)
      insructRight_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { insructRight_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { insructRight_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { insructRight_keyResp.clearEvents(); });
    }

    if (insructRight_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = insructRight_keyResp.getKeys({keyList: ['k'], waitRelease: false});
      _insructRight_keyResp_allKeys = _insructRight_keyResp_allKeys.concat(theseKeys);
      if (_insructRight_keyResp_allKeys.length > 0) {
        insructRight_keyResp.keys = _insructRight_keyResp_allKeys[_insructRight_keyResp_allKeys.length - 1].name;  // just the last key pressed
        insructRight_keyResp.rt = _insructRight_keyResp_allKeys[_insructRight_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructRightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructRightRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructRight' ---
    instructRightComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    insructRight_keyResp.stop();
    // the Routine "instructRight" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instructLeft_keyResp_allKeys;
var instructLeftComponents;
function instructLeftRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructLeft' ---
    t = 0;
    instructLeftClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructLeft_keyResp.keys = undefined;
    instructLeft_keyResp.rt = undefined;
    _instructLeft_keyResp_allKeys = [];
    // keep track of which components have finished
    instructLeftComponents = [];
    instructLeftComponents.push(instructLeft_text);
    instructLeftComponents.push(instructLeft_centerImg);
    instructLeftComponents.push(instructLeft_rightImg1);
    instructLeftComponents.push(instructLeft_leftImg1);
    instructLeftComponents.push(instructLeft_rightImg2);
    instructLeftComponents.push(instructLeft_leftImg2);
    instructLeftComponents.push(instructLeft_keyResp);
    
    instructLeftComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructLeftRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructLeft' ---
    // get current time
    t = instructLeftClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructLeft_text* updates
    if (t >= 0.0 && instructLeft_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructLeft_text.tStart = t;  // (not accounting for frame time here)
      instructLeft_text.frameNStart = frameN;  // exact frame index
      
      instructLeft_text.setAutoDraw(true);
    }

    
    // *instructLeft_centerImg* updates
    if (t >= 0.0 && instructLeft_centerImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructLeft_centerImg.tStart = t;  // (not accounting for frame time here)
      instructLeft_centerImg.frameNStart = frameN;  // exact frame index
      
      instructLeft_centerImg.setAutoDraw(true);
    }

    
    // *instructLeft_rightImg1* updates
    if (t >= 0.0 && instructLeft_rightImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructLeft_rightImg1.tStart = t;  // (not accounting for frame time here)
      instructLeft_rightImg1.frameNStart = frameN;  // exact frame index
      
      instructLeft_rightImg1.setAutoDraw(true);
    }

    
    // *instructLeft_leftImg1* updates
    if (t >= 0.0 && instructLeft_leftImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructLeft_leftImg1.tStart = t;  // (not accounting for frame time here)
      instructLeft_leftImg1.frameNStart = frameN;  // exact frame index
      
      instructLeft_leftImg1.setAutoDraw(true);
    }

    
    // *instructLeft_rightImg2* updates
    if (t >= 0.0 && instructLeft_rightImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructLeft_rightImg2.tStart = t;  // (not accounting for frame time here)
      instructLeft_rightImg2.frameNStart = frameN;  // exact frame index
      
      instructLeft_rightImg2.setAutoDraw(true);
    }

    
    // *instructLeft_leftImg2* updates
    if (t >= 0.0 && instructLeft_leftImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructLeft_leftImg2.tStart = t;  // (not accounting for frame time here)
      instructLeft_leftImg2.frameNStart = frameN;  // exact frame index
      
      instructLeft_leftImg2.setAutoDraw(true);
    }

    
    // *instructLeft_keyResp* updates
    if (t >= 0.0 && instructLeft_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructLeft_keyResp.tStart = t;  // (not accounting for frame time here)
      instructLeft_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructLeft_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructLeft_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructLeft_keyResp.clearEvents(); });
    }

    if (instructLeft_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructLeft_keyResp.getKeys({keyList: ['s'], waitRelease: false});
      _instructLeft_keyResp_allKeys = _instructLeft_keyResp_allKeys.concat(theseKeys);
      if (_instructLeft_keyResp_allKeys.length > 0) {
        instructLeft_keyResp.keys = _instructLeft_keyResp_allKeys[_instructLeft_keyResp_allKeys.length - 1].name;  // just the last key pressed
        instructLeft_keyResp.rt = _instructLeft_keyResp_allKeys[_instructLeft_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructLeftComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructLeftRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructLeft' ---
    instructLeftComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    instructLeft_keyResp.stop();
    // the Routine "instructLeft" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _insructInconRight_keyResp_allKeys;
var instructInconRightComponents;
function instructInconRightRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructInconRight' ---
    t = 0;
    instructInconRightClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    insructInconRight_keyResp.keys = undefined;
    insructInconRight_keyResp.rt = undefined;
    _insructInconRight_keyResp_allKeys = [];
    // keep track of which components have finished
    instructInconRightComponents = [];
    instructInconRightComponents.push(instructInconRight_text);
    instructInconRightComponents.push(instructIncon_centerImg);
    instructInconRightComponents.push(instructIncon_rightImg1);
    instructInconRightComponents.push(instructIncon_leftImg1);
    instructInconRightComponents.push(instructIncon_leftImg2);
    instructInconRightComponents.push(instructIncon_rightImg2);
    instructInconRightComponents.push(insructInconRight_keyResp);
    
    instructInconRightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructInconRightRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructInconRight' ---
    // get current time
    t = instructInconRightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructInconRight_text* updates
    if (t >= 0.0 && instructInconRight_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructInconRight_text.tStart = t;  // (not accounting for frame time here)
      instructInconRight_text.frameNStart = frameN;  // exact frame index
      
      instructInconRight_text.setAutoDraw(true);
    }

    
    // *instructIncon_centerImg* updates
    if (t >= 0.0 && instructIncon_centerImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructIncon_centerImg.tStart = t;  // (not accounting for frame time here)
      instructIncon_centerImg.frameNStart = frameN;  // exact frame index
      
      instructIncon_centerImg.setAutoDraw(true);
    }

    
    // *instructIncon_rightImg1* updates
    if (t >= 0.0 && instructIncon_rightImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructIncon_rightImg1.tStart = t;  // (not accounting for frame time here)
      instructIncon_rightImg1.frameNStart = frameN;  // exact frame index
      
      instructIncon_rightImg1.setAutoDraw(true);
    }

    
    // *instructIncon_leftImg1* updates
    if (t >= 0.0 && instructIncon_leftImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructIncon_leftImg1.tStart = t;  // (not accounting for frame time here)
      instructIncon_leftImg1.frameNStart = frameN;  // exact frame index
      
      instructIncon_leftImg1.setAutoDraw(true);
    }

    
    // *instructIncon_leftImg2* updates
    if (t >= 0.0 && instructIncon_leftImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructIncon_leftImg2.tStart = t;  // (not accounting for frame time here)
      instructIncon_leftImg2.frameNStart = frameN;  // exact frame index
      
      instructIncon_leftImg2.setAutoDraw(true);
    }

    
    // *instructIncon_rightImg2* updates
    if (t >= 0.0 && instructIncon_rightImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructIncon_rightImg2.tStart = t;  // (not accounting for frame time here)
      instructIncon_rightImg2.frameNStart = frameN;  // exact frame index
      
      instructIncon_rightImg2.setAutoDraw(true);
    }

    
    // *insructInconRight_keyResp* updates
    if (t >= 0.0 && insructInconRight_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      insructInconRight_keyResp.tStart = t;  // (not accounting for frame time here)
      insructInconRight_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { insructInconRight_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { insructInconRight_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { insructInconRight_keyResp.clearEvents(); });
    }

    if (insructInconRight_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = insructInconRight_keyResp.getKeys({keyList: ['k'], waitRelease: false});
      _insructInconRight_keyResp_allKeys = _insructInconRight_keyResp_allKeys.concat(theseKeys);
      if (_insructInconRight_keyResp_allKeys.length > 0) {
        insructInconRight_keyResp.keys = _insructInconRight_keyResp_allKeys[_insructInconRight_keyResp_allKeys.length - 1].name;  // just the last key pressed
        insructInconRight_keyResp.rt = _insructInconRight_keyResp_allKeys[_insructInconRight_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructInconRightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructInconRightRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructInconRight' ---
    instructInconRightComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    insructInconRight_keyResp.stop();
    // the Routine "instructInconRight" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instructInconLeft_keyResp_allKeys;
var instructInconLeftComponents;
function instructInconLeftRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructInconLeft' ---
    t = 0;
    instructInconLeftClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructInconLeft_keyResp.keys = undefined;
    instructInconLeft_keyResp.rt = undefined;
    _instructInconLeft_keyResp_allKeys = [];
    // keep track of which components have finished
    instructInconLeftComponents = [];
    instructInconLeftComponents.push(instructInconLeft_text);
    instructInconLeftComponents.push(instructInconLeft_centerImg);
    instructInconLeftComponents.push(instructInconLeft_rightImg1);
    instructInconLeftComponents.push(instructInconLeft_leftImg1);
    instructInconLeftComponents.push(instructInconLeft_rightImg2);
    instructInconLeftComponents.push(instructInconLeft_leftImg2);
    instructInconLeftComponents.push(instructInconLeft_keyResp);
    
    instructInconLeftComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructInconLeftRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructInconLeft' ---
    // get current time
    t = instructInconLeftClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructInconLeft_text* updates
    if (t >= 0.0 && instructInconLeft_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructInconLeft_text.tStart = t;  // (not accounting for frame time here)
      instructInconLeft_text.frameNStart = frameN;  // exact frame index
      
      instructInconLeft_text.setAutoDraw(true);
    }

    
    // *instructInconLeft_centerImg* updates
    if (t >= 0.0 && instructInconLeft_centerImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructInconLeft_centerImg.tStart = t;  // (not accounting for frame time here)
      instructInconLeft_centerImg.frameNStart = frameN;  // exact frame index
      
      instructInconLeft_centerImg.setAutoDraw(true);
    }

    
    // *instructInconLeft_rightImg1* updates
    if (t >= 0.0 && instructInconLeft_rightImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructInconLeft_rightImg1.tStart = t;  // (not accounting for frame time here)
      instructInconLeft_rightImg1.frameNStart = frameN;  // exact frame index
      
      instructInconLeft_rightImg1.setAutoDraw(true);
    }

    
    // *instructInconLeft_leftImg1* updates
    if (t >= 0.0 && instructInconLeft_leftImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructInconLeft_leftImg1.tStart = t;  // (not accounting for frame time here)
      instructInconLeft_leftImg1.frameNStart = frameN;  // exact frame index
      
      instructInconLeft_leftImg1.setAutoDraw(true);
    }

    
    // *instructInconLeft_rightImg2* updates
    if (t >= 0.0 && instructInconLeft_rightImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructInconLeft_rightImg2.tStart = t;  // (not accounting for frame time here)
      instructInconLeft_rightImg2.frameNStart = frameN;  // exact frame index
      
      instructInconLeft_rightImg2.setAutoDraw(true);
    }

    
    // *instructInconLeft_leftImg2* updates
    if (t >= 0.0 && instructInconLeft_leftImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructInconLeft_leftImg2.tStart = t;  // (not accounting for frame time here)
      instructInconLeft_leftImg2.frameNStart = frameN;  // exact frame index
      
      instructInconLeft_leftImg2.setAutoDraw(true);
    }

    
    // *instructInconLeft_keyResp* updates
    if (t >= 0.0 && instructInconLeft_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructInconLeft_keyResp.tStart = t;  // (not accounting for frame time here)
      instructInconLeft_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructInconLeft_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructInconLeft_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructInconLeft_keyResp.clearEvents(); });
    }

    if (instructInconLeft_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructInconLeft_keyResp.getKeys({keyList: ['s'], waitRelease: false});
      _instructInconLeft_keyResp_allKeys = _instructInconLeft_keyResp_allKeys.concat(theseKeys);
      if (_instructInconLeft_keyResp_allKeys.length > 0) {
        instructInconLeft_keyResp.keys = _instructInconLeft_keyResp_allKeys[_instructInconLeft_keyResp_allKeys.length - 1].name;  // just the last key pressed
        instructInconLeft_keyResp.rt = _instructInconLeft_keyResp_allKeys[_instructInconLeft_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructInconLeftComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructInconLeftRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructInconLeft' ---
    instructInconLeftComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    instructInconLeft_keyResp.stop();
    // the Routine "instructInconLeft" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_block_loop;
function prac_block_loopLoopBegin(prac_block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 0, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blockSelect_practice.csv',
      seed: undefined, name: 'prac_block_loop'
    });
    psychoJS.experiment.addLoop(prac_block_loop); // add the loop to the experiment
    currentLoop = prac_block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac_block_loop.forEach(function() {
      snapshot = prac_block_loop.getSnapshot();
    
      prac_block_loopLoopScheduler.add(importConditions(snapshot));
      prac_block_loopLoopScheduler.add(prac_blockRemindersRoutineBegin(snapshot));
      prac_block_loopLoopScheduler.add(prac_blockRemindersRoutineEachFrame());
      prac_block_loopLoopScheduler.add(prac_blockRemindersRoutineEnd(snapshot));
      prac_block_loopLoopScheduler.add(initFixationRoutineBegin(snapshot));
      prac_block_loopLoopScheduler.add(initFixationRoutineEachFrame());
      prac_block_loopLoopScheduler.add(initFixationRoutineEnd(snapshot));
      const prac_trial_loopLoopScheduler = new Scheduler(psychoJS);
      prac_block_loopLoopScheduler.add(prac_trial_loopLoopBegin(prac_trial_loopLoopScheduler, snapshot));
      prac_block_loopLoopScheduler.add(prac_trial_loopLoopScheduler);
      prac_block_loopLoopScheduler.add(prac_trial_loopLoopEnd);
      prac_block_loopLoopScheduler.add(prac_blockFeedRoutineBegin(snapshot));
      prac_block_loopLoopScheduler.add(prac_blockFeedRoutineEachFrame());
      prac_block_loopLoopScheduler.add(prac_blockFeedRoutineEnd(snapshot));
      prac_block_loopLoopScheduler.add(prac_block_loopLoopEndIteration(prac_block_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var prac_trial_loop;
function prac_trial_loopLoopBegin(prac_trial_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trial_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: whichBlock,
      seed: undefined, name: 'prac_trial_loop'
    });
    psychoJS.experiment.addLoop(prac_trial_loop); // add the loop to the experiment
    currentLoop = prac_trial_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac_trial_loop.forEach(function() {
      snapshot = prac_trial_loop.getSnapshot();
    
      prac_trial_loopLoopScheduler.add(importConditions(snapshot));
      prac_trial_loopLoopScheduler.add(prac_stimRoutineRoutineBegin(snapshot));
      prac_trial_loopLoopScheduler.add(prac_stimRoutineRoutineEachFrame());
      prac_trial_loopLoopScheduler.add(prac_stimRoutineRoutineEnd(snapshot));
      prac_trial_loopLoopScheduler.add(prac_trial_loopLoopEndIteration(prac_trial_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trial_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trial_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trial_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function prac_block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_block_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var task_block_loop;
function task_block_loopLoopBegin(task_block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    task_block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 0, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blockSelect.csv',
      seed: undefined, name: 'task_block_loop'
    });
    psychoJS.experiment.addLoop(task_block_loop); // add the loop to the experiment
    currentLoop = task_block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    task_block_loop.forEach(function() {
      snapshot = task_block_loop.getSnapshot();
    
      task_block_loopLoopScheduler.add(importConditions(snapshot));
      task_block_loopLoopScheduler.add(task_blockRemindersRoutineBegin(snapshot));
      task_block_loopLoopScheduler.add(task_blockRemindersRoutineEachFrame());
      task_block_loopLoopScheduler.add(task_blockRemindersRoutineEnd(snapshot));
      task_block_loopLoopScheduler.add(initFixationRoutineBegin(snapshot));
      task_block_loopLoopScheduler.add(initFixationRoutineEachFrame());
      task_block_loopLoopScheduler.add(initFixationRoutineEnd(snapshot));
      const task_trial_loopLoopScheduler = new Scheduler(psychoJS);
      task_block_loopLoopScheduler.add(task_trial_loopLoopBegin(task_trial_loopLoopScheduler, snapshot));
      task_block_loopLoopScheduler.add(task_trial_loopLoopScheduler);
      task_block_loopLoopScheduler.add(task_trial_loopLoopEnd);
      task_block_loopLoopScheduler.add(task_blockFeedRoutineBegin(snapshot));
      task_block_loopLoopScheduler.add(task_blockFeedRoutineEachFrame());
      task_block_loopLoopScheduler.add(task_blockFeedRoutineEnd(snapshot));
      task_block_loopLoopScheduler.add(task_block_loopLoopEndIteration(task_block_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var task_trial_loop;
function task_trial_loopLoopBegin(task_trial_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    task_trial_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: whichBlock,
      seed: undefined, name: 'task_trial_loop'
    });
    psychoJS.experiment.addLoop(task_trial_loop); // add the loop to the experiment
    currentLoop = task_trial_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    task_trial_loop.forEach(function() {
      snapshot = task_trial_loop.getSnapshot();
    
      task_trial_loopLoopScheduler.add(importConditions(snapshot));
      task_trial_loopLoopScheduler.add(task_stimRoutineRoutineBegin(snapshot));
      task_trial_loopLoopScheduler.add(task_stimRoutineRoutineEachFrame());
      task_trial_loopLoopScheduler.add(task_stimRoutineRoutineEnd(snapshot));
      task_trial_loopLoopScheduler.add(task_trial_loopLoopEndIteration(task_trial_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function task_trial_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(task_trial_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function task_trial_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function task_block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(task_block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function task_block_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var surprise_block_loop;
function surprise_block_loopLoopBegin(surprise_block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    surprise_block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'surpriseBlock_select_A.xlsx',
      seed: undefined, name: 'surprise_block_loop'
    });
    psychoJS.experiment.addLoop(surprise_block_loop); // add the loop to the experiment
    currentLoop = surprise_block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    surprise_block_loop.forEach(function() {
      snapshot = surprise_block_loop.getSnapshot();
    
      surprise_block_loopLoopScheduler.add(importConditions(snapshot));
      surprise_block_loopLoopScheduler.add(instructSurpriseTask2_2RoutineBegin(snapshot));
      surprise_block_loopLoopScheduler.add(instructSurpriseTask2_2RoutineEachFrame());
      surprise_block_loopLoopScheduler.add(instructSurpriseTask2_2RoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      surprise_block_loopLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      surprise_block_loopLoopScheduler.add(trialsLoopScheduler);
      surprise_block_loopLoopScheduler.add(trialsLoopEnd);
      surprise_block_loopLoopScheduler.add(surprise_block_loopLoopEndIteration(surprise_block_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: whichSurpriseBlock,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(surpriseTaskRoutineBegin(snapshot));
      trialsLoopScheduler.add(surpriseTaskRoutineEachFrame());
      trialsLoopScheduler.add(surpriseTaskRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function surprise_block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(surprise_block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function surprise_block_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _prac_reminder_keyResp_allKeys;
var prac_blockRemindersComponents;
function prac_blockRemindersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_blockReminders' ---
    t = 0;
    prac_blockRemindersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    prac_reminder_keyResp.keys = undefined;
    prac_reminder_keyResp.rt = undefined;
    _prac_reminder_keyResp_allKeys = [];
    // keep track of which components have finished
    prac_blockRemindersComponents = [];
    prac_blockRemindersComponents.push(prac_blockText);
    prac_blockRemindersComponents.push(prac_reminder_text);
    prac_blockRemindersComponents.push(prac_reminder_keyResp);
    
    prac_blockRemindersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function prac_blockRemindersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_blockReminders' ---
    // get current time
    t = prac_blockRemindersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_blockText* updates
    if (t >= 0.0 && prac_blockText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_blockText.tStart = t;  // (not accounting for frame time here)
      prac_blockText.frameNStart = frameN;  // exact frame index
      
      prac_blockText.setAutoDraw(true);
    }

    
    // *prac_reminder_text* updates
    if (t >= 0.0 && prac_reminder_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_reminder_text.tStart = t;  // (not accounting for frame time here)
      prac_reminder_text.frameNStart = frameN;  // exact frame index
      
      prac_reminder_text.setAutoDraw(true);
    }

    
    // *prac_reminder_keyResp* updates
    if (t >= 0.0 && prac_reminder_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_reminder_keyResp.tStart = t;  // (not accounting for frame time here)
      prac_reminder_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_reminder_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_reminder_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_reminder_keyResp.clearEvents(); });
    }

    if (prac_reminder_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_reminder_keyResp.getKeys({keyList: ['k'], waitRelease: false});
      _prac_reminder_keyResp_allKeys = _prac_reminder_keyResp_allKeys.concat(theseKeys);
      if (_prac_reminder_keyResp_allKeys.length > 0) {
        prac_reminder_keyResp.keys = _prac_reminder_keyResp_allKeys[_prac_reminder_keyResp_allKeys.length - 1].name;  // just the last key pressed
        prac_reminder_keyResp.rt = _prac_reminder_keyResp_allKeys[_prac_reminder_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    prac_blockRemindersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_blockRemindersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_blockReminders' ---
    prac_blockRemindersComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_reminder_keyResp.corr, level);
    }
    psychoJS.experiment.addData('prac_reminder_keyResp.keys', prac_reminder_keyResp.keys);
    if (typeof prac_reminder_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_reminder_keyResp.rt', prac_reminder_keyResp.rt);
        routineTimer.reset();
        }
    
    prac_reminder_keyResp.stop();
    // the Routine "prac_blockReminders" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var initFixationComponents;
function initFixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'initFixation' ---
    t = 0;
    initFixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    initFixation_img.setImage('img/transp_fixation.png');
    // keep track of which components have finished
    initFixationComponents = [];
    initFixationComponents.push(initFixation_img);
    
    initFixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function initFixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'initFixation' ---
    // get current time
    t = initFixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *initFixation_img* updates
    if (t >= 0.0 && initFixation_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      initFixation_img.tStart = t;  // (not accounting for frame time here)
      initFixation_img.frameNStart = frameN;  // exact frame index
      
      initFixation_img.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (initFixation_img.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      initFixation_img.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    initFixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initFixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'initFixation' ---
    initFixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ISIRange;
var thisISI;
var _prac_stim_keyResp_allKeys;
var prac_stimRoutineComponents;
function prac_stimRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_stimRoutine' ---
    t = 0;
    prac_stimRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from prac_isi_code
    ISIRange = linspace(1000, 1500, 500);
    shuffle(ISIRange);
    thisISI = (ISIRange[0] / 1000);
    console.log("thisISI: ", thisISI);
    trials.addData("ISI", thisISI);
    
    bigFace.setImage(straightFace);
    cover_background_2.setImage('img/cover_background.png');
    prac_centerImg.setPos(locationC);
    prac_centerImg.setSize(imageSize);
    prac_centerImg.setImage(middleStim);
    prac_rightImg1.setPos(locationR);
    prac_rightImg1.setSize(imageSize);
    prac_rightImg1.setImage(rightStim);
    prac_rightImg2.setPos([0.077, 0]);
    prac_rightImg2.setSize(imageSize);
    prac_rightImg2.setImage(rightStim);
    prac_leftImg1.setPos(locationL);
    prac_leftImg1.setSize(imageSize);
    prac_leftImg1.setImage(leftStim);
    prac_leftImg2.setPos([(- 0.077), 0]);
    prac_leftImg2.setSize(imageSize);
    prac_leftImg2.setImage(leftStim);
    prac_fixImg.setImage('img/transp_fixation.png');
    prac_stim_keyResp.keys = undefined;
    prac_stim_keyResp.rt = undefined;
    _prac_stim_keyResp_allKeys = [];
    // keep track of which components have finished
    prac_stimRoutineComponents = [];
    prac_stimRoutineComponents.push(bigFace);
    prac_stimRoutineComponents.push(cover_background_2);
    prac_stimRoutineComponents.push(prac_centerImg);
    prac_stimRoutineComponents.push(prac_rightImg1);
    prac_stimRoutineComponents.push(prac_rightImg2);
    prac_stimRoutineComponents.push(prac_leftImg1);
    prac_stimRoutineComponents.push(prac_leftImg2);
    prac_stimRoutineComponents.push(prac_fixImg);
    prac_stimRoutineComponents.push(prac_stim_keyResp);
    
    prac_stimRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function prac_stimRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_stimRoutine' ---
    // get current time
    t = prac_stimRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bigFace* updates
    if (t >= 0.0 && bigFace.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bigFace.tStart = t;  // (not accounting for frame time here)
      bigFace.frameNStart = frameN;  // exact frame index
      
      bigFace.setAutoDraw(true);
    }

    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bigFace.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bigFace.setAutoDraw(false);
    }
    
    // *cover_background_2* updates
    if (t >= 0.0 && cover_background_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cover_background_2.tStart = t;  // (not accounting for frame time here)
      cover_background_2.frameNStart = frameN;  // exact frame index
      
      cover_background_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cover_background_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cover_background_2.setAutoDraw(false);
    }
    
    // *prac_centerImg* updates
    if (t >= 0.15 && prac_centerImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_centerImg.tStart = t;  // (not accounting for frame time here)
      prac_centerImg.frameNStart = frameN;  // exact frame index
      
      prac_centerImg.setAutoDraw(true);
    }

    frameRemains = 0.15 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_centerImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_centerImg.setAutoDraw(false);
    }
    
    // *prac_rightImg1* updates
    if (t >= 0.0 && prac_rightImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_rightImg1.tStart = t;  // (not accounting for frame time here)
      prac_rightImg1.frameNStart = frameN;  // exact frame index
      
      prac_rightImg1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_rightImg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_rightImg1.setAutoDraw(false);
    }
    
    // *prac_rightImg2* updates
    if (t >= 0.0 && prac_rightImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_rightImg2.tStart = t;  // (not accounting for frame time here)
      prac_rightImg2.frameNStart = frameN;  // exact frame index
      
      prac_rightImg2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_rightImg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_rightImg2.setAutoDraw(false);
    }
    
    // *prac_leftImg1* updates
    if (t >= 0.0 && prac_leftImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_leftImg1.tStart = t;  // (not accounting for frame time here)
      prac_leftImg1.frameNStart = frameN;  // exact frame index
      
      prac_leftImg1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_leftImg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_leftImg1.setAutoDraw(false);
    }
    
    // *prac_leftImg2* updates
    if (t >= 0.0 && prac_leftImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_leftImg2.tStart = t;  // (not accounting for frame time here)
      prac_leftImg2.frameNStart = frameN;  // exact frame index
      
      prac_leftImg2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_leftImg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_leftImg2.setAutoDraw(false);
    }
    
    // *prac_fixImg* updates
    if (t >= 0.0 && prac_fixImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_fixImg.tStart = t;  // (not accounting for frame time here)
      prac_fixImg.frameNStart = frameN;  // exact frame index
      
      prac_fixImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_fixImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_fixImg.setAutoDraw(false);
    }
    
    // *prac_stim_keyResp* updates
    if (t >= 0.0 && prac_stim_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_stim_keyResp.tStart = t;  // (not accounting for frame time here)
      prac_stim_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_stim_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_stim_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_stim_keyResp.clearEvents(); });
    }

    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_stim_keyResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_stim_keyResp.status = PsychoJS.Status.FINISHED;
  }

    if (prac_stim_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_stim_keyResp.getKeys({keyList: ['s', 'k'], waitRelease: false});
      _prac_stim_keyResp_allKeys = _prac_stim_keyResp_allKeys.concat(theseKeys);
      if (_prac_stim_keyResp_allKeys.length > 0) {
        prac_stim_keyResp.keys = _prac_stim_keyResp_allKeys.map((key) => key.name);  // storing all keys
        prac_stim_keyResp.rt = _prac_stim_keyResp_allKeys.map((key) => key.rt);
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    prac_stimRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_stimRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_stimRoutine' ---
    prac_stimRoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_stim_keyResp.corr, level);
    }
    psychoJS.experiment.addData('prac_stim_keyResp.keys', prac_stim_keyResp.keys);
    if (typeof prac_stim_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_stim_keyResp.rt', prac_stim_keyResp.rt);
        }
    
    prac_stim_keyResp.stop();
    // Run 'End Routine' code from prac_accuracy_code
    trialNum = (trialNum + 1);
    if (prac_stim_keyResp.keys) {
        if ((prac_stim_keyResp.keys[0] === "s")) {
            if ((target === "left")) {
                accuracy = 1;
                numCorr = (numCorr + 1);
            } else {
                if ((target === "right")) {
                    accuracy = 0;
                }
            }
        } else {
            if ((prac_stim_keyResp.keys[0] === "k")) {
                if ((target === "right")) {
                    accuracy = 1;
                    numCorr = (numCorr + 1);
                } else {
                    if ((target === "left")) {
                        accuracy = 0;
                    }
                }
            }
        }
    }
    prac_trial_loop.addData("accuracy", accuracy);
    
    // the Routine "prac_stimRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var outPut;
var _prac_blockFeed_keyResp_allKeys;
var prac_blockFeedComponents;
function prac_blockFeedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_blockFeed' ---
    t = 0;
    prac_blockFeedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from prac_blockFeed_code
    blockAcc = (numCorr / trialNum);
    if ((blockAcc >= 0.75)) {
        outPut = "You have completed the practice";
        prac_block_loop.finished = true;
    } else {
        if ((blockAcc <= 0.75)) {
            outPut = "Please try the practice again";
            prac_block_loop.finished = false;
        }
    }
    trialNum = 0;
    numCorr = 0;
    
    prac_blockFeed_text.setText(outPut);
    prac_blockFeed_keyResp.keys = undefined;
    prac_blockFeed_keyResp.rt = undefined;
    _prac_blockFeed_keyResp_allKeys = [];
    // keep track of which components have finished
    prac_blockFeedComponents = [];
    prac_blockFeedComponents.push(prac_blockFeed_text);
    prac_blockFeedComponents.push(prac_pressContinue);
    prac_blockFeedComponents.push(prac_blockFeed_keyResp);
    
    prac_blockFeedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function prac_blockFeedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_blockFeed' ---
    // get current time
    t = prac_blockFeedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_blockFeed_text* updates
    if (t >= 0.0 && prac_blockFeed_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_blockFeed_text.tStart = t;  // (not accounting for frame time here)
      prac_blockFeed_text.frameNStart = frameN;  // exact frame index
      
      prac_blockFeed_text.setAutoDraw(true);
    }

    
    // *prac_pressContinue* updates
    if (t >= 0.0 && prac_pressContinue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_pressContinue.tStart = t;  // (not accounting for frame time here)
      prac_pressContinue.frameNStart = frameN;  // exact frame index
      
      prac_pressContinue.setAutoDraw(true);
    }

    
    // *prac_blockFeed_keyResp* updates
    if (t >= 0.0 && prac_blockFeed_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_blockFeed_keyResp.tStart = t;  // (not accounting for frame time here)
      prac_blockFeed_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_blockFeed_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_blockFeed_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_blockFeed_keyResp.clearEvents(); });
    }

    if (prac_blockFeed_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_blockFeed_keyResp.getKeys({keyList: ['k'], waitRelease: false});
      _prac_blockFeed_keyResp_allKeys = _prac_blockFeed_keyResp_allKeys.concat(theseKeys);
      if (_prac_blockFeed_keyResp_allKeys.length > 0) {
        prac_blockFeed_keyResp.keys = _prac_blockFeed_keyResp_allKeys[_prac_blockFeed_keyResp_allKeys.length - 1].name;  // just the last key pressed
        prac_blockFeed_keyResp.rt = _prac_blockFeed_keyResp_allKeys[_prac_blockFeed_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    prac_blockFeedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_blockFeedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_blockFeed' ---
    prac_blockFeedComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_blockFeed_keyResp.corr, level);
    }
    psychoJS.experiment.addData('prac_blockFeed_keyResp.keys', prac_blockFeed_keyResp.keys);
    if (typeof prac_blockFeed_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_blockFeed_keyResp.rt', prac_blockFeed_keyResp.rt);
        routineTimer.reset();
        }
    
    prac_blockFeed_keyResp.stop();
    // the Routine "prac_blockFeed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _redcap1_key_allKeys;
var redCap1Components;
function redCap1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'redCap1' ---
    t = 0;
    redCap1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    redcap1_key.keys = undefined;
    redcap1_key.rt = undefined;
    _redcap1_key_allKeys = [];
    // keep track of which components have finished
    redCap1Components = [];
    redCap1Components.push(redCap1_text);
    redCap1Components.push(redcap1_key);
    
    redCap1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function redCap1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'redCap1' ---
    // get current time
    t = redCap1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *redCap1_text* updates
    if (t >= 0.0 && redCap1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redCap1_text.tStart = t;  // (not accounting for frame time here)
      redCap1_text.frameNStart = frameN;  // exact frame index
      
      redCap1_text.setAutoDraw(true);
    }

    
    // *redcap1_key* updates
    if (t >= 0.0 && redcap1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redcap1_key.tStart = t;  // (not accounting for frame time here)
      redcap1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { redcap1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { redcap1_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { redcap1_key.clearEvents(); });
    }

    if (redcap1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = redcap1_key.getKeys({keyList: ['k'], waitRelease: false});
      _redcap1_key_allKeys = _redcap1_key_allKeys.concat(theseKeys);
      if (_redcap1_key_allKeys.length > 0) {
        redcap1_key.keys = _redcap1_key_allKeys[_redcap1_key_allKeys.length - 1].name;  // just the last key pressed
        redcap1_key.rt = _redcap1_key_allKeys[_redcap1_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    redCap1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function redCap1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'redCap1' ---
    redCap1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(redcap1_key.corr, level);
    }
    psychoJS.experiment.addData('redcap1_key.keys', redcap1_key.keys);
    if (typeof redcap1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('redcap1_key.rt', redcap1_key.rt);
        routineTimer.reset();
        }
    
    redcap1_key.stop();
    // the Routine "redCap1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blockNumText;
var _task_blockReminders_keyResp_allKeys;
var task_blockRemindersComponents;
function task_blockRemindersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'task_blockReminders' ---
    t = 0;
    task_blockRemindersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from task_blockReminder_code
    blockCounter = (blockCounter + 1);
    if ((blockCounter === 1)) {
        blockNumText = "Block 1 of 12";
    } else {
        if ((blockCounter === 2)) {
            blockNumText = "Block 2 of 12";
        } else {
            if ((blockCounter === 3)) {
                blockNumText = "Block 3 of 12";
            } else {
                if ((blockCounter === 4)) {
                    blockNumText = "Block 4 of 12";
                } else {
                    if ((blockCounter === 5)) {
                        blockNumText = "Block 5 of 12";
                    } else {
                        if ((blockCounter === 6)) {
                            blockNumText = "Block 6 of 12";
                        } else {
                            if ((blockCounter === 7)) {
                                blockNumText = "Block 7 of 12";
                            } else {
                                if ((blockCounter === 8)) {
                                    blockNumText = "Block 8 of 12";
                                } else {
                                    if ((blockCounter === 9)) {
                                        blockNumText = "Block 9 of 12";
                                    } else {
                                        if ((blockCounter === 10)) {
                                            blockNumText = "Block 10 of 12";
                                        } else {
                                            if ((blockCounter === 11)) {
                                                blockNumText = "Block 11 of 12";
                                            } else {
                                                if ((blockCounter === 12)) {
                                                    blockNumText = "Block 12 of 12";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    task_blockText.setText(blockNumText);
    task_blockReminders_keyResp.keys = undefined;
    task_blockReminders_keyResp.rt = undefined;
    _task_blockReminders_keyResp_allKeys = [];
    // keep track of which components have finished
    task_blockRemindersComponents = [];
    task_blockRemindersComponents.push(task_blockText);
    task_blockRemindersComponents.push(task_blockReminders_text);
    task_blockRemindersComponents.push(task_blockReminders_keyResp);
    
    task_blockRemindersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function task_blockRemindersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'task_blockReminders' ---
    // get current time
    t = task_blockRemindersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *task_blockText* updates
    if (t >= 0.0 && task_blockText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_blockText.tStart = t;  // (not accounting for frame time here)
      task_blockText.frameNStart = frameN;  // exact frame index
      
      task_blockText.setAutoDraw(true);
    }

    
    // *task_blockReminders_text* updates
    if (t >= 0.0 && task_blockReminders_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_blockReminders_text.tStart = t;  // (not accounting for frame time here)
      task_blockReminders_text.frameNStart = frameN;  // exact frame index
      
      task_blockReminders_text.setAutoDraw(true);
    }

    
    // *task_blockReminders_keyResp* updates
    if (t >= 0.0 && task_blockReminders_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_blockReminders_keyResp.tStart = t;  // (not accounting for frame time here)
      task_blockReminders_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { task_blockReminders_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { task_blockReminders_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { task_blockReminders_keyResp.clearEvents(); });
    }

    if (task_blockReminders_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = task_blockReminders_keyResp.getKeys({keyList: ['k'], waitRelease: false});
      _task_blockReminders_keyResp_allKeys = _task_blockReminders_keyResp_allKeys.concat(theseKeys);
      if (_task_blockReminders_keyResp_allKeys.length > 0) {
        task_blockReminders_keyResp.keys = _task_blockReminders_keyResp_allKeys[_task_blockReminders_keyResp_allKeys.length - 1].name;  // just the last key pressed
        task_blockReminders_keyResp.rt = _task_blockReminders_keyResp_allKeys[_task_blockReminders_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    task_blockRemindersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_blockRemindersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'task_blockReminders' ---
    task_blockRemindersComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(task_blockReminders_keyResp.corr, level);
    }
    psychoJS.experiment.addData('task_blockReminders_keyResp.keys', task_blockReminders_keyResp.keys);
    if (typeof task_blockReminders_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('task_blockReminders_keyResp.rt', task_blockReminders_keyResp.rt);
        routineTimer.reset();
        }
    
    task_blockReminders_keyResp.stop();
    // the Routine "task_blockReminders" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _task1_stim_keyResp_allKeys;
var task_stimRoutineComponents;
function task_stimRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'task_stimRoutine' ---
    t = 0;
    task_stimRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from task_isi_code
    ISIRange = linspace(1000, 1500, 500);
    shuffle(ISIRange);
    thisISI = (ISIRange[0] / 1000);
    console.log("thisISI: ", thisISI);
    trials.addData("ISI", thisISI);
    
    bigFace_2.setImage(straightFace);
    task_centerImg.setPos(locationC);
    task_centerImg.setSize(imageSize);
    task_centerImg.setImage(middleStim);
    task_rightImg1.setPos(locationR);
    task_rightImg1.setSize(imageSize);
    task_rightImg1.setImage(rightStim);
    task_rightImg2.setPos([0.077, 0]);
    task_rightImg2.setSize(imageSize);
    task_rightImg2.setImage(rightStim);
    task_leftImg1.setPos(locationL);
    task_leftImg1.setSize(imageSize);
    task_leftImg1.setImage(leftStim);
    task_leftImg2.setPos([(- 0.077), 0]);
    task_leftImg2.setSize(imageSize);
    task_leftImg2.setImage(leftStim);
    task_fixImg.setImage('img/transp_fixation.png');
    task1_stim_keyResp.keys = undefined;
    task1_stim_keyResp.rt = undefined;
    _task1_stim_keyResp_allKeys = [];
    // keep track of which components have finished
    task_stimRoutineComponents = [];
    task_stimRoutineComponents.push(bigFace_2);
    task_stimRoutineComponents.push(cover_background);
    task_stimRoutineComponents.push(task_centerImg);
    task_stimRoutineComponents.push(task_rightImg1);
    task_stimRoutineComponents.push(task_rightImg2);
    task_stimRoutineComponents.push(task_leftImg1);
    task_stimRoutineComponents.push(task_leftImg2);
    task_stimRoutineComponents.push(task_fixImg);
    task_stimRoutineComponents.push(task1_stim_keyResp);
    
    task_stimRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function task_stimRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'task_stimRoutine' ---
    // get current time
    t = task_stimRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bigFace_2* updates
    if (t >= 0.0 && bigFace_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bigFace_2.tStart = t;  // (not accounting for frame time here)
      bigFace_2.frameNStart = frameN;  // exact frame index
      
      bigFace_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bigFace_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bigFace_2.setAutoDraw(false);
    }
    
    // *cover_background* updates
    if (t >= 0.0 && cover_background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cover_background.tStart = t;  // (not accounting for frame time here)
      cover_background.frameNStart = frameN;  // exact frame index
      
      cover_background.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cover_background.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cover_background.setAutoDraw(false);
    }
    
    // *task_centerImg* updates
    if (t >= 0.15 && task_centerImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_centerImg.tStart = t;  // (not accounting for frame time here)
      task_centerImg.frameNStart = frameN;  // exact frame index
      
      task_centerImg.setAutoDraw(true);
    }

    frameRemains = 0.15 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (task_centerImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      task_centerImg.setAutoDraw(false);
    }
    
    // *task_rightImg1* updates
    if (t >= 0.0 && task_rightImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_rightImg1.tStart = t;  // (not accounting for frame time here)
      task_rightImg1.frameNStart = frameN;  // exact frame index
      
      task_rightImg1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (task_rightImg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      task_rightImg1.setAutoDraw(false);
    }
    
    // *task_rightImg2* updates
    if (t >= 0.0 && task_rightImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_rightImg2.tStart = t;  // (not accounting for frame time here)
      task_rightImg2.frameNStart = frameN;  // exact frame index
      
      task_rightImg2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (task_rightImg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      task_rightImg2.setAutoDraw(false);
    }
    
    // *task_leftImg1* updates
    if (t >= 0.0 && task_leftImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_leftImg1.tStart = t;  // (not accounting for frame time here)
      task_leftImg1.frameNStart = frameN;  // exact frame index
      
      task_leftImg1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (task_leftImg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      task_leftImg1.setAutoDraw(false);
    }
    
    // *task_leftImg2* updates
    if (t >= 0.0 && task_leftImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_leftImg2.tStart = t;  // (not accounting for frame time here)
      task_leftImg2.frameNStart = frameN;  // exact frame index
      
      task_leftImg2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (task_leftImg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      task_leftImg2.setAutoDraw(false);
    }
    
    // *task_fixImg* updates
    if (t >= 0.0 && task_fixImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_fixImg.tStart = t;  // (not accounting for frame time here)
      task_fixImg.frameNStart = frameN;  // exact frame index
      
      task_fixImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (task_fixImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      task_fixImg.setAutoDraw(false);
    }
    
    // *task1_stim_keyResp* updates
    if (t >= 0.0 && task1_stim_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task1_stim_keyResp.tStart = t;  // (not accounting for frame time here)
      task1_stim_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { task1_stim_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { task1_stim_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { task1_stim_keyResp.clearEvents(); });
    }

    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (task1_stim_keyResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      task1_stim_keyResp.status = PsychoJS.Status.FINISHED;
  }

    if (task1_stim_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = task1_stim_keyResp.getKeys({keyList: ['s', 'k'], waitRelease: false});
      _task1_stim_keyResp_allKeys = _task1_stim_keyResp_allKeys.concat(theseKeys);
      if (_task1_stim_keyResp_allKeys.length > 0) {
        task1_stim_keyResp.keys = _task1_stim_keyResp_allKeys.map((key) => key.name);  // storing all keys
        task1_stim_keyResp.rt = _task1_stim_keyResp_allKeys.map((key) => key.rt);
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    task_stimRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_stimRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'task_stimRoutine' ---
    task_stimRoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(task1_stim_keyResp.corr, level);
    }
    psychoJS.experiment.addData('task1_stim_keyResp.keys', task1_stim_keyResp.keys);
    if (typeof task1_stim_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('task1_stim_keyResp.rt', task1_stim_keyResp.rt);
        }
    
    task1_stim_keyResp.stop();
    // Run 'End Routine' code from task_accuracy_code
    trialNum = (trialNum + 1);
    if (task1_stim_keyResp.keys) {
        if ((task1_stim_keyResp.keys[0] === "s")) {
            if ((target === "left")) {
                accuracy = 1;
                numCorr = (numCorr + 1);
            } else {
                if ((target === "right")) {
                    accuracy = 0;
                }
            }
        } else {
            if ((task1_stim_keyResp.keys[0] === "k")) {
                if ((target === "right")) {
                    accuracy = 1;
                    numCorr = (numCorr + 1);
                } else {
                    if ((target === "left")) {
                        accuracy = 0;
                    }
                }
            }
        }
    }
    task_trial_loop.addData("accuracy", accuracy);
    
    // the Routine "task_stimRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blockFeed;
var blockFeedCat;
var _task_blockFeed_keyResp_allKeys;
var task_blockFeedComponents;
function task_blockFeedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'task_blockFeed' ---
    t = 0;
    task_blockFeedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from task_blockFeed_code
    blockAcc = (numCorr / trialNum);
    if ((blockCounter < 10)) {
        if ((blockAcc >= 0.75)) {
            if ((blockAcc < 0.9)) {
                blockFeed = "Good job";
                blockFeedCat = 1;
            } else {
                if ((blockAcc >= 0.9)) {
                    blockFeed = "Respond faster";
                    blockFeedCat = 2;
                }
            }
        } else {
            if ((blockAcc < 0.75)) {
                blockFeed = "Respond more accurately";
                blockFeedCat = 3;
            }
        }
    } else {
        if ((blockCounter === 10)) {
            /* You have completed all blocks */
        }
    }
    task_trial_loop.addData("blockFeedCat", blockFeedCat);
    trialNum = 0;
    numCorr = 0;
    
    task_blockFeed_text.setText(blockFeed);
    task_blockFeed_text2.setText("Press the 'K' key");
    task_blockFeed_keyResp.keys = undefined;
    task_blockFeed_keyResp.rt = undefined;
    _task_blockFeed_keyResp_allKeys = [];
    // keep track of which components have finished
    task_blockFeedComponents = [];
    task_blockFeedComponents.push(task_blockFeed_text);
    task_blockFeedComponents.push(task_blockFeed_text2);
    task_blockFeedComponents.push(task_blockFeed_keyResp);
    
    task_blockFeedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function task_blockFeedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'task_blockFeed' ---
    // get current time
    t = task_blockFeedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *task_blockFeed_text* updates
    if (t >= 0.0 && task_blockFeed_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_blockFeed_text.tStart = t;  // (not accounting for frame time here)
      task_blockFeed_text.frameNStart = frameN;  // exact frame index
      
      task_blockFeed_text.setAutoDraw(true);
    }

    
    // *task_blockFeed_text2* updates
    if (t >= 10 && task_blockFeed_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_blockFeed_text2.tStart = t;  // (not accounting for frame time here)
      task_blockFeed_text2.frameNStart = frameN;  // exact frame index
      
      task_blockFeed_text2.setAutoDraw(true);
    }

    
    // *task_blockFeed_keyResp* updates
    if (t >= 10 && task_blockFeed_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_blockFeed_keyResp.tStart = t;  // (not accounting for frame time here)
      task_blockFeed_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { task_blockFeed_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { task_blockFeed_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { task_blockFeed_keyResp.clearEvents(); });
    }

    if (task_blockFeed_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = task_blockFeed_keyResp.getKeys({keyList: ['k'], waitRelease: false});
      _task_blockFeed_keyResp_allKeys = _task_blockFeed_keyResp_allKeys.concat(theseKeys);
      if (_task_blockFeed_keyResp_allKeys.length > 0) {
        task_blockFeed_keyResp.keys = _task_blockFeed_keyResp_allKeys[_task_blockFeed_keyResp_allKeys.length - 1].name;  // just the last key pressed
        task_blockFeed_keyResp.rt = _task_blockFeed_keyResp_allKeys[_task_blockFeed_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    task_blockFeedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_blockFeedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'task_blockFeed' ---
    task_blockFeedComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(task_blockFeed_keyResp.corr, level);
    }
    psychoJS.experiment.addData('task_blockFeed_keyResp.keys', task_blockFeed_keyResp.keys);
    if (typeof task_blockFeed_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('task_blockFeed_keyResp.rt', task_blockFeed_keyResp.rt);
        routineTimer.reset();
        }
    
    task_blockFeed_keyResp.stop();
    // the Routine "task_blockFeed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixation1Components;
function fixation1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation1' ---
    t = 0;
    fixation1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    psychoJS.eventManager.clearEvents();
    
    // keep track of which components have finished
    fixation1Components = [];
    fixation1Components.push(fix);
    
    fixation1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fixation1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation1' ---
    // get current time
    t = fixation1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixation1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation1' ---
    fixation1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _errorN_key_resp_2_allKeys;
var errorNumbersComponents;
function errorNumbersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'errorNumbers' ---
    t = 0;
    errorNumbersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    psychoJS.eventManager.clearEvents();
    
    errorNum_text_box.setText('');
    errorNum_text_box.refresh();
    errorN_key_resp_2.keys = undefined;
    errorN_key_resp_2.rt = undefined;
    _errorN_key_resp_2_allKeys = [];
    // keep track of which components have finished
    errorNumbersComponents = [];
    errorNumbersComponents.push(errorNumbers_text_2);
    errorNumbersComponents.push(errorNum_text_box);
    errorNumbersComponents.push(errorN_key_resp_2);
    
    errorNumbersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function errorNumbersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'errorNumbers' ---
    // get current time
    t = errorNumbersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *errorNumbers_text_2* updates
    if (t >= 0.0 && errorNumbers_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      errorNumbers_text_2.tStart = t;  // (not accounting for frame time here)
      errorNumbers_text_2.frameNStart = frameN;  // exact frame index
      
      errorNumbers_text_2.setAutoDraw(true);
    }

    
    // *errorNum_text_box* updates
    if (t >= 0.0 && errorNum_text_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      errorNum_text_box.tStart = t;  // (not accounting for frame time here)
      errorNum_text_box.frameNStart = frameN;  // exact frame index
      
      errorNum_text_box.setAutoDraw(true);
    }

    
    // *errorN_key_resp_2* updates
    if (t >= 0.0 && errorN_key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      errorN_key_resp_2.tStart = t;  // (not accounting for frame time here)
      errorN_key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { errorN_key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { errorN_key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { errorN_key_resp_2.clearEvents(); });
    }

    if (errorN_key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = errorN_key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _errorN_key_resp_2_allKeys = _errorN_key_resp_2_allKeys.concat(theseKeys);
      if (_errorN_key_resp_2_allKeys.length > 0) {
        errorN_key_resp_2.keys = _errorN_key_resp_2_allKeys[_errorN_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        errorN_key_resp_2.rt = _errorN_key_resp_2_allKeys[_errorN_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    errorNumbersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function errorNumbersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'errorNumbers' ---
    errorNumbersComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('errorNum_text_box.text',errorNum_text_box.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(errorN_key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('errorN_key_resp_2.keys', errorN_key_resp_2.keys);
    if (typeof errorN_key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('errorN_key_resp_2.rt', errorN_key_resp_2.rt);
        routineTimer.reset();
        }
    
    errorN_key_resp_2.stop();
    // the Routine "errorNumbers" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _errorN_key_resp_3_allKeys;
var errorPercentageComponents;
function errorPercentageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'errorPercentage' ---
    t = 0;
    errorPercentageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    psychoJS.eventManager.clearEvents();
    
    errorPercent_text_box.setText('');
    errorPercent_text_box.refresh();
    errorN_key_resp_3.keys = undefined;
    errorN_key_resp_3.rt = undefined;
    _errorN_key_resp_3_allKeys = [];
    // keep track of which components have finished
    errorPercentageComponents = [];
    errorPercentageComponents.push(errorNumbers_text_3);
    errorPercentageComponents.push(errorPercent_text_box);
    errorPercentageComponents.push(errorN_key_resp_3);
    
    errorPercentageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function errorPercentageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'errorPercentage' ---
    // get current time
    t = errorPercentageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *errorNumbers_text_3* updates
    if (t >= 0.0 && errorNumbers_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      errorNumbers_text_3.tStart = t;  // (not accounting for frame time here)
      errorNumbers_text_3.frameNStart = frameN;  // exact frame index
      
      errorNumbers_text_3.setAutoDraw(true);
    }

    
    // *errorPercent_text_box* updates
    if (t >= 0.0 && errorPercent_text_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      errorPercent_text_box.tStart = t;  // (not accounting for frame time here)
      errorPercent_text_box.frameNStart = frameN;  // exact frame index
      
      errorPercent_text_box.setAutoDraw(true);
    }

    
    // *errorN_key_resp_3* updates
    if (t >= 0.0 && errorN_key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      errorN_key_resp_3.tStart = t;  // (not accounting for frame time here)
      errorN_key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { errorN_key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { errorN_key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { errorN_key_resp_3.clearEvents(); });
    }

    if (errorN_key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = errorN_key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _errorN_key_resp_3_allKeys = _errorN_key_resp_3_allKeys.concat(theseKeys);
      if (_errorN_key_resp_3_allKeys.length > 0) {
        errorN_key_resp_3.keys = _errorN_key_resp_3_allKeys[_errorN_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        errorN_key_resp_3.rt = _errorN_key_resp_3_allKeys[_errorN_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    errorPercentageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function errorPercentageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'errorPercentage' ---
    errorPercentageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('errorPercent_text_box.text',errorPercent_text_box.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(errorN_key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('errorN_key_resp_3.keys', errorN_key_resp_3.keys);
    if (typeof errorN_key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('errorN_key_resp_3.rt', errorN_key_resp_3.rt);
        routineTimer.reset();
        }
    
    errorN_key_resp_3.stop();
    // the Routine "errorPercentage" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _botherRate_key_resp_allKeys;
var botherRateComponents;
function botherRateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'botherRate' ---
    t = 0;
    botherRateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    psychoJS.eventManager.clearEvents();
    
    bother_text_box.setText('');
    bother_text_box.refresh();
    botherRate_key_resp.keys = undefined;
    botherRate_key_resp.rt = undefined;
    _botherRate_key_resp_allKeys = [];
    // keep track of which components have finished
    botherRateComponents = [];
    botherRateComponents.push(botherRate_text);
    botherRateComponents.push(bother_text_box);
    botherRateComponents.push(botherRate_key_resp);
    
    botherRateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function botherRateRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'botherRate' ---
    // get current time
    t = botherRateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *botherRate_text* updates
    if (t >= 0.0 && botherRate_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      botherRate_text.tStart = t;  // (not accounting for frame time here)
      botherRate_text.frameNStart = frameN;  // exact frame index
      
      botherRate_text.setAutoDraw(true);
    }

    
    // *bother_text_box* updates
    if (t >= 0.0 && bother_text_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bother_text_box.tStart = t;  // (not accounting for frame time here)
      bother_text_box.frameNStart = frameN;  // exact frame index
      
      bother_text_box.setAutoDraw(true);
    }

    
    // *botherRate_key_resp* updates
    if (t >= 0.0 && botherRate_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      botherRate_key_resp.tStart = t;  // (not accounting for frame time here)
      botherRate_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { botherRate_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { botherRate_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { botherRate_key_resp.clearEvents(); });
    }

    if (botherRate_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = botherRate_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _botherRate_key_resp_allKeys = _botherRate_key_resp_allKeys.concat(theseKeys);
      if (_botherRate_key_resp_allKeys.length > 0) {
        botherRate_key_resp.keys = _botherRate_key_resp_allKeys[_botherRate_key_resp_allKeys.length - 1].name;  // just the last key pressed
        botherRate_key_resp.rt = _botherRate_key_resp_allKeys[_botherRate_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    botherRateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function botherRateRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'botherRate' ---
    botherRateComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('bother_text_box.text',bother_text_box.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(botherRate_key_resp.corr, level);
    }
    psychoJS.experiment.addData('botherRate_key_resp.keys', botherRate_key_resp.keys);
    if (typeof botherRate_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('botherRate_key_resp.rt', botherRate_key_resp.rt);
        routineTimer.reset();
        }
    
    botherRate_key_resp.stop();
    // the Routine "botherRate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _redcap2_key_allKeys;
var redCap2Components;
function redCap2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'redCap2' ---
    t = 0;
    redCap2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    redcap2_key.keys = undefined;
    redcap2_key.rt = undefined;
    _redcap2_key_allKeys = [];
    // keep track of which components have finished
    redCap2Components = [];
    redCap2Components.push(redCap2_tex);
    redCap2Components.push(redcap2_key);
    
    redCap2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function redCap2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'redCap2' ---
    // get current time
    t = redCap2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *redCap2_tex* updates
    if (t >= 0.0 && redCap2_tex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redCap2_tex.tStart = t;  // (not accounting for frame time here)
      redCap2_tex.frameNStart = frameN;  // exact frame index
      
      redCap2_tex.setAutoDraw(true);
    }

    
    // *redcap2_key* updates
    if (t >= 0.0 && redcap2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redcap2_key.tStart = t;  // (not accounting for frame time here)
      redcap2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { redcap2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { redcap2_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { redcap2_key.clearEvents(); });
    }

    if (redcap2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = redcap2_key.getKeys({keyList: ['k'], waitRelease: false});
      _redcap2_key_allKeys = _redcap2_key_allKeys.concat(theseKeys);
      if (_redcap2_key_allKeys.length > 0) {
        redcap2_key.keys = _redcap2_key_allKeys[_redcap2_key_allKeys.length - 1].name;  // just the last key pressed
        redcap2_key.rt = _redcap2_key_allKeys[_redcap2_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    redCap2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function redCap2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'redCap2' ---
    redCap2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(redcap2_key.corr, level);
    }
    psychoJS.experiment.addData('redcap2_key.keys', redcap2_key.keys);
    if (typeof redcap2_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('redcap2_key.rt', redcap2_key.rt);
        routineTimer.reset();
        }
    
    redcap2_key.stop();
    // the Routine "redCap2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instruct_surp1_key_resp_allKeys;
var surpriseInstructComponents;
function surpriseInstructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'surpriseInstruct' ---
    t = 0;
    surpriseInstructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruct_surp1_key_resp.keys = undefined;
    instruct_surp1_key_resp.rt = undefined;
    _instruct_surp1_key_resp_allKeys = [];
    // keep track of which components have finished
    surpriseInstructComponents = [];
    surpriseInstructComponents.push(instruct_surprise1);
    surpriseInstructComponents.push(instruct_surp1_key_resp);
    
    surpriseInstructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function surpriseInstructRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'surpriseInstruct' ---
    // get current time
    t = surpriseInstructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct_surprise1* updates
    if (t >= 0.0 && instruct_surprise1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_surprise1.tStart = t;  // (not accounting for frame time here)
      instruct_surprise1.frameNStart = frameN;  // exact frame index
      
      instruct_surprise1.setAutoDraw(true);
    }

    
    // *instruct_surp1_key_resp* updates
    if (t >= 0.0 && instruct_surp1_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_surp1_key_resp.tStart = t;  // (not accounting for frame time here)
      instruct_surp1_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruct_surp1_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruct_surp1_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruct_surp1_key_resp.clearEvents(); });
    }

    if (instruct_surp1_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruct_surp1_key_resp.getKeys({keyList: ['k'], waitRelease: false});
      _instruct_surp1_key_resp_allKeys = _instruct_surp1_key_resp_allKeys.concat(theseKeys);
      if (_instruct_surp1_key_resp_allKeys.length > 0) {
        instruct_surp1_key_resp.keys = _instruct_surp1_key_resp_allKeys[_instruct_surp1_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instruct_surp1_key_resp.rt = _instruct_surp1_key_resp_allKeys[_instruct_surp1_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    surpriseInstructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function surpriseInstructRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'surpriseInstruct' ---
    surpriseInstructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruct_surp1_key_resp.corr, level);
    }
    psychoJS.experiment.addData('instruct_surp1_key_resp.keys', instruct_surp1_key_resp.keys);
    if (typeof instruct_surp1_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruct_surp1_key_resp.rt', instruct_surp1_key_resp.rt);
        routineTimer.reset();
        }
    
    instruct_surp1_key_resp.stop();
    // the Routine "surpriseInstruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var surp_blockNumText;
var _instructMainTask_keyResp_allKeys;
var instructSurpriseTask2_2Components;
function instructSurpriseTask2_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructSurpriseTask2_2' ---
    t = 0;
    instructSurpriseTask2_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    surp_blockCounter = (surp_blockCounter + 1);
    if ((surp_blockCounter === 1)) {
        surp_blockNumText = "Block 1 of 8";
    } else {
        if ((surp_blockCounter === 2)) {
            surp_blockNumText = "Block 2 of 8";
        } else {
            if ((surp_blockCounter === 3)) {
                surp_blockNumText = "Block 3 of 8";
            } else {
                if ((surp_blockCounter === 4)) {
                    surp_blockNumText = "Block 4 of 8";
                } else {
                    if ((surp_blockCounter === 5)) {
                        surp_blockNumText = "Block 5 of 8";
                    } else {
                        if ((surp_blockCounter === 6)) {
                            surp_blockNumText = "Block 6 of 8";
                        } else {
                            if ((surp_blockCounter === 7)) {
                                surp_blockNumText = "Block 7 of 8";
                            } else {
                                if ((surp_blockCounter === 8)) {
                                    surp_blockNumText = "Block 8 of 8";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    task_blockText_2.setText(surp_blockNumText);
    instructMainTask_text.setText(taskTextSource);
    instructMainTask_keyResp.keys = undefined;
    instructMainTask_keyResp.rt = undefined;
    _instructMainTask_keyResp_allKeys = [];
    // keep track of which components have finished
    instructSurpriseTask2_2Components = [];
    instructSurpriseTask2_2Components.push(task_blockText_2);
    instructSurpriseTask2_2Components.push(instructMainTask_text);
    instructSurpriseTask2_2Components.push(instructMainTask_keyResp);
    
    instructSurpriseTask2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructSurpriseTask2_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructSurpriseTask2_2' ---
    // get current time
    t = instructSurpriseTask2_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *task_blockText_2* updates
    if (t >= 0.0 && task_blockText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_blockText_2.tStart = t;  // (not accounting for frame time here)
      task_blockText_2.frameNStart = frameN;  // exact frame index
      
      task_blockText_2.setAutoDraw(true);
    }

    
    // *instructMainTask_text* updates
    if (t >= 0.0 && instructMainTask_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructMainTask_text.tStart = t;  // (not accounting for frame time here)
      instructMainTask_text.frameNStart = frameN;  // exact frame index
      
      instructMainTask_text.setAutoDraw(true);
    }

    
    // *instructMainTask_keyResp* updates
    if (t >= 0.0 && instructMainTask_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructMainTask_keyResp.tStart = t;  // (not accounting for frame time here)
      instructMainTask_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructMainTask_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructMainTask_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructMainTask_keyResp.clearEvents(); });
    }

    if (instructMainTask_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructMainTask_keyResp.getKeys({keyList: ['k'], waitRelease: false});
      _instructMainTask_keyResp_allKeys = _instructMainTask_keyResp_allKeys.concat(theseKeys);
      if (_instructMainTask_keyResp_allKeys.length > 0) {
        instructMainTask_keyResp.keys = _instructMainTask_keyResp_allKeys[_instructMainTask_keyResp_allKeys.length - 1].name;  // just the last key pressed
        instructMainTask_keyResp.rt = _instructMainTask_keyResp_allKeys[_instructMainTask_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructSurpriseTask2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructSurpriseTask2_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructSurpriseTask2_2' ---
    instructSurpriseTask2_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instructMainTask_keyResp.corr, level);
    }
    psychoJS.experiment.addData('instructMainTask_keyResp.keys', instructMainTask_keyResp.keys);
    if (typeof instructMainTask_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructMainTask_keyResp.rt', instructMainTask_keyResp.rt);
        routineTimer.reset();
        }
    
    instructMainTask_keyResp.stop();
    // the Routine "instructSurpriseTask2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _surprise_key_resp_allKeys;
var surpriseTaskComponents;
function surpriseTaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'surpriseTask' ---
    t = 0;
    surpriseTaskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stimulus.setImage(surpriseFaces);
    instructsurpA1_right.setPos([0.6, (- 0.03)]);
    instructsurpA1_right.setText(instructsurpA1);
    instructsurpA2_left.setText(instructsurpA2);
    surprise_key_resp.keys = undefined;
    surprise_key_resp.rt = undefined;
    _surprise_key_resp_allKeys = [];
    // keep track of which components have finished
    surpriseTaskComponents = [];
    surpriseTaskComponents.push(stimulus);
    surpriseTaskComponents.push(instructsurpA1_right);
    surpriseTaskComponents.push(instructsurpA2_left);
    surpriseTaskComponents.push(surprise_key_resp);
    
    surpriseTaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function surpriseTaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'surpriseTask' ---
    // get current time
    t = surpriseTaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimulus* updates
    if (t >= 0.0 && stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus.tStart = t;  // (not accounting for frame time here)
      stimulus.frameNStart = frameN;  // exact frame index
      
      stimulus.setAutoDraw(true);
    }

    
    // *instructsurpA1_right* updates
    if (t >= 0.0 && instructsurpA1_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructsurpA1_right.tStart = t;  // (not accounting for frame time here)
      instructsurpA1_right.frameNStart = frameN;  // exact frame index
      
      instructsurpA1_right.setAutoDraw(true);
    }

    
    // *instructsurpA2_left* updates
    if (t >= 0.0 && instructsurpA2_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructsurpA2_left.tStart = t;  // (not accounting for frame time here)
      instructsurpA2_left.frameNStart = frameN;  // exact frame index
      
      instructsurpA2_left.setAutoDraw(true);
    }

    
    // *surprise_key_resp* updates
    if (t >= 0.0 && surprise_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      surprise_key_resp.tStart = t;  // (not accounting for frame time here)
      surprise_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { surprise_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { surprise_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { surprise_key_resp.clearEvents(); });
    }

    if (surprise_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = surprise_key_resp.getKeys({keyList: ['s', 'k'], waitRelease: false});
      _surprise_key_resp_allKeys = _surprise_key_resp_allKeys.concat(theseKeys);
      if (_surprise_key_resp_allKeys.length > 0) {
        surprise_key_resp.keys = _surprise_key_resp_allKeys[_surprise_key_resp_allKeys.length - 1].name;  // just the last key pressed
        surprise_key_resp.rt = _surprise_key_resp_allKeys[_surprise_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    surpriseTaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function surpriseTaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'surpriseTask' ---
    surpriseTaskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(surprise_key_resp.corr, level);
    }
    psychoJS.experiment.addData('surprise_key_resp.keys', surprise_key_resp.keys);
    if (typeof surprise_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('surprise_key_resp.rt', surprise_key_resp.rt);
        routineTimer.reset();
        }
    
    surprise_key_resp.stop();
    // the Routine "surpriseTask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _redcap1_key_2_allKeys;
var redCap3Components;
function redCap3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'redCap3' ---
    t = 0;
    redCap3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    redcap1_key_2.keys = undefined;
    redcap1_key_2.rt = undefined;
    _redcap1_key_2_allKeys = [];
    // keep track of which components have finished
    redCap3Components = [];
    redCap3Components.push(redCap3_text);
    redCap3Components.push(redcap1_key_2);
    
    redCap3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function redCap3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'redCap3' ---
    // get current time
    t = redCap3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *redCap3_text* updates
    if (t >= 0.0 && redCap3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redCap3_text.tStart = t;  // (not accounting for frame time here)
      redCap3_text.frameNStart = frameN;  // exact frame index
      
      redCap3_text.setAutoDraw(true);
    }

    
    // *redcap1_key_2* updates
    if (t >= 0.0 && redcap1_key_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redcap1_key_2.tStart = t;  // (not accounting for frame time here)
      redcap1_key_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { redcap1_key_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { redcap1_key_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { redcap1_key_2.clearEvents(); });
    }

    if (redcap1_key_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = redcap1_key_2.getKeys({keyList: ['k'], waitRelease: false});
      _redcap1_key_2_allKeys = _redcap1_key_2_allKeys.concat(theseKeys);
      if (_redcap1_key_2_allKeys.length > 0) {
        redcap1_key_2.keys = _redcap1_key_2_allKeys[_redcap1_key_2_allKeys.length - 1].name;  // just the last key pressed
        redcap1_key_2.rt = _redcap1_key_2_allKeys[_redcap1_key_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    redCap3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function redCap3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'redCap3' ---
    redCap3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(redcap1_key_2.corr, level);
    }
    psychoJS.experiment.addData('redcap1_key_2.keys', redcap1_key_2.keys);
    if (typeof redcap1_key_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('redcap1_key_2.rt', redcap1_key_2.rt);
        routineTimer.reset();
        }
    
    redcap1_key_2.stop();
    // the Routine "redCap3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finishMessageComponents;
function finishMessageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finishMessage' ---
    t = 0;
    finishMessageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    finishMessageComponents = [];
    finishMessageComponents.push(finishMessage_text);
    
    finishMessageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function finishMessageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finishMessage' ---
    // get current time
    t = finishMessageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finishMessage_text* updates
    if (t >= 0.0 && finishMessage_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finishMessage_text.tStart = t;  // (not accounting for frame time here)
      finishMessage_text.frameNStart = frameN;  // exact frame index
      
      finishMessage_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (finishMessage_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      finishMessage_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    finishMessageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finishMessageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finishMessage' ---
    finishMessageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Run 'End Experiment' code from setup_code
  psychoJS.window.mouseVisible = true;
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
