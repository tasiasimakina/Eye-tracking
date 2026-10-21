/****************************** 
 * Eye_Tracking_Template *
 ******************************/


// store info about the experiment session:
let expName = 'eye_tracking_template';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
    'distance_cm': '',
    'screen_diag_in': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from configuration_code
// ---- run without Pavlovia: use local copies of two files that Builder points at pavlovia.org ----
(function () {
  if (/pavlovia\.org$/.test(window.location.hostname)) { return; }
  const localCopies = {
    'https://pavlovia.org/assets/default/default.png': 'default.png',
    'https://cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.1/seedrandom.min.js': 'vendor/seedrandom.min.js'
  };
  const proto = core.ServerManager.prototype;
  const original = proto.prepareResources;
  proto.prepareResources = function (resources, ...rest) {
    const fixed = (resources || []).map((r) =>
      (r && localCopies[r.path]) ? Object.assign({}, r, { path: localCopies[r.path] }) : r);
    return original.call(this, fixed, ...rest);
  };
})();

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(loading_trialRoutineBegin());
flowScheduler.add(loading_trialRoutineEachFrame());
flowScheduler.add(loading_trialRoutineEnd());
flowScheduler.add(webcam_trialRoutineBegin());
flowScheduler.add(webcam_trialRoutineEachFrame());
flowScheduler.add(webcam_trialRoutineEnd());
flowScheduler.add(intro_calibatrion_trialRoutineBegin());
flowScheduler.add(intro_calibatrion_trialRoutineEachFrame());
flowScheduler.add(intro_calibatrion_trialRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(intro_validation_trialRoutineBegin());
flowScheduler.add(intro_validation_trialRoutineEachFrame());
flowScheduler.add(intro_validation_trialRoutineEnd());
const val_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(val_loopLoopBegin(val_loopLoopScheduler));
flowScheduler.add(val_loopLoopScheduler);
flowScheduler.add(val_loopLoopEnd);


const stim_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(stim_loopLoopBegin(stim_loopLoopScheduler));
flowScheduler.add(stim_loopLoopScheduler);
flowScheduler.add(stim_loopLoopEnd);


flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'calibration_trials.xlsx', 'path': 'calibration_trials.xlsx'},
    {'name': 'validation_trials.xlsx', 'path': 'validation_trials.xlsx'},
    {'name': 'stimuli.xlsx', 'path': 'stimuli.xlsx'},
    {'name': 'stim1.jpg', 'path': 'stim1.jpg'},
    {'name': 'stim2.jpg', 'path': 'stim2.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var loading_trialClock;
var loading_text;
var webcam_trialClock;
var intro_text;
var intro_calibatrion_trialClock;
var calibration_text;
var mouse_2;
var calibration_trialClock;
var calibration_square;
var mouse_3;
var intro_validation_trialClock;
var validation_text;
var mouse_4;
var validation_trialClock;
var val_dot;
var stim_trialClock;
var stim_image;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "loading_trial"
  loading_trialClock = new util.Clock();
  // Download the webgazer library and re-download seedrandom.js (since webgazer
  // overrides it with a version that conflicts with PsychoJS)
  psychoJS.serverManager.prepareResources([
    { name: 'webgazer.js', path: 'js/webgazer-2.0.1.tp.js' },
    { name: 'seedrandom.js', path: 'https://cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.1/seedrandom.min.js' }
  ]);
  // Initialize x and y arrays; we use these to calculate running averages of 
  // current gaze position; the longer the window, the slower, but more fluent
  // the updates
  let averagingWindow = 10;
  window.xGazes = new Array(averagingWindow ).fill(0);
  window.yGazes = new Array(averagingWindow ).fill(0);
  // Timestamp for last time eyes exited validation box
  window.eyesExitedTimestamp= (new Date).getTime();
  // No. of ms to keep webcam thumbnail visible after eyes returned into validation box
  window.eyesReturnedDelay = 3
  // ---- gaze recording helpers (do not change) ----
  // gazeStart() begins collecting gaze points, gazeStop('column') saves them
  // into the data file as a JSON list of {x, y, t}: x, y in pixels of the browser
  // window, t in ms since gazeStart().
  window.gazeRecording = false;
  window.gazeBuffer = [];
  window.gazeT0 = 0;
  window.gazeStart = function () {
    window.gazeBuffer = [];
    window.gazeT0 = performance.now();
    window.gazeRecording = true;
  };
  window.gazeStop = function (columnName) {
    window.gazeRecording = false;
    psychoJS.experiment.addData(columnName || 'gaze_data', JSON.stringify(window.gazeBuffer));
    window.gazeBuffer = [];
  };
  
  loading_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'loading_text',
    text: 'Downloading additional resources. \n\nOne moment please...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "webcam_trial"
  webcam_trialClock = new util.Clock();
  intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text',
    text: 'demo_eye_tracking: starting webcam\n\nThis experiment demonstrates eye tracking via the webgazer library. \n\nYou should see your web-browser request access to your webcam. You might need to click on this text to make that happen. Please permit access, and wait a little while. Your webcam video should appear in the top-left of the screen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "intro_calibatrion_trial"
  intro_calibatrion_trialClock = new util.Clock();
  calibration_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'calibration_text',
    text: "demo_eye_tracking: calibration\n\nNow we'll calibrate the eye tracker. Please try to keep your head still and within the rectangle you see in your webcam video. When you do so, the rectangle turns green.\n\nIn the next part of this experiment, the webcam video disappears. It will reappear when your head is too from the rectangle. If this happens, please move back into view. White squares appears at different locations on the screen. Please click each square with your mouse.\n\nClick anywhere to continue...",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "calibration_trial"
  calibration_trialClock = new util.Clock();
  calibration_square = new visual.Rect ({
    win: psychoJS.window, name: 'calibration_square', 
    width: [0.02, 0.02][0], height: [0.02, 0.02][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: 0, 
    interpolate: true, 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "intro_validation_trial"
  intro_validation_trialClock = new util.Clock();
  validation_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'validation_text',
    text: 'Accuracy check\n\nNow we check how accurate the eye tracker is. Nine dots will appear one after another. Look at the centre of each dot until it disappears. Please do not click and keep your head still.\n\nClick anywhere to start...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "validation_trial"
  validation_trialClock = new util.Clock();
  val_dot = new visual.Polygon({
    win: psychoJS.window, name: 'val_dot', 
    edges: 100, size:[0.03, 0.03],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "stim_trial"
  stim_trialClock = new util.Clock();
  stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.8, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var loading_trialMaxDurationReached;
var loading_trialMaxDuration;
var loading_trialComponents;
function loading_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'loading_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    loading_trialClock.reset();
    routineTimer.reset();
    loading_trialMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('loading_trial.started', globalClock.getTime());
    loading_trialMaxDuration = null
    // keep track of which components have finished
    loading_trialComponents = [];
    loading_trialComponents.push(loading_text);
    
    loading_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function loading_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'loading_trial' ---
    // get current time
    t = loading_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Continue once the webgazer global is available
    continueRoutine = !window.hasOwnProperty('webgazer');
    
    // *loading_text* updates
    if (t >= 0.0 && loading_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      loading_text.tStart = t;  // (not accounting for frame time here)
      loading_text.frameNStart = frameN;  // exact frame index
      
      loading_text.setAutoDraw(true);
    }
    
    
    // if loading_text is active this frame...
    if (loading_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    loading_trialComponents.forEach( function(thisComponent) {
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


function loading_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'loading_trial' ---
    loading_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('loading_trial.stopped', globalClock.getTime());
    // the Routine "loading_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var webcam_trialMaxDurationReached;
var webcam_trialMaxDuration;
var webcam_trialComponents;
function webcam_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'webcam_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    webcam_trialClock.reset();
    routineTimer.reset();
    webcam_trialMaxDurationReached = false;
    // update component parameters for each repeat
    // Show webcam thumbnail and face feedback box, but not face overlay and gaze dot
    window.webgazer.params.showVideoPreview = true;
    window.webgazer.params.showFaceFeedbackBox = true;
    window.webgazer.params.showFaceOverlay = false;
    window.webgazer.params.showGazeDot = false
    // Start eye tracking
    window.webgazer
        // Called on each eye tracking update
        .setGazeListener(function(data, clock) {
          if (data !== null) {
            // Remove first element from gazes array, add current gaze at the end
            window.xGazes.shift();
            window.xGazes.push(data.x);
            window.yGazes.shift();
            window.yGazes.push(data.y);
            // keep the point if a trial is recording
            if (window.gazeRecording) {
              window.gazeBuffer.push({x: Math.round(data.x), y: Math.round(data.y), t: Math.round(performance.now() - window.gazeT0)});
            }
           }
        })
        .begin();
        //.showPredictionPoints(true); 
    
    psychoJS.experiment.addData('webcam_trial.started', globalClock.getTime());
    webcam_trialMaxDuration = null
    // keep track of which components have finished
    webcam_trialComponents = [];
    webcam_trialComponents.push(intro_text);
    
    webcam_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function webcam_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'webcam_trial' ---
    // get current time
    t = webcam_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text* updates
    if (t >= 0.0 && intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text.tStart = t;  // (not accounting for frame time here)
      intro_text.frameNStart = frameN;  // exact frame index
      
      intro_text.setAutoDraw(true);
    }
    
    
    // if intro_text is active this frame...
    if (intro_text.status === PsychoJS.Status.STARTED) {
    }
    
    // Finish routine once everything is ready
    continueRoutine = 
      !window.webgazer.isReady() || 
      document.getElementById('webgazerFaceFeedbackBox') === null ||
      document.getElementById('webgazerVideoFeed') === null;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    webcam_trialComponents.forEach( function(thisComponent) {
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


function webcam_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'webcam_trial' ---
    webcam_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('webcam_trial.stopped', globalClock.getTime());
    // the Routine "webcam_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro_calibatrion_trialMaxDurationReached;
var gotValidClick;
var intro_calibatrion_trialMaxDuration;
var intro_calibatrion_trialComponents;
function intro_calibatrion_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_calibatrion_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    intro_calibatrion_trialClock.reset();
    routineTimer.reset();
    intro_calibatrion_trialMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('intro_calibatrion_trial.started', globalClock.getTime());
    intro_calibatrion_trialMaxDuration = null
    // keep track of which components have finished
    intro_calibatrion_trialComponents = [];
    intro_calibatrion_trialComponents.push(calibration_text);
    intro_calibatrion_trialComponents.push(mouse_2);
    
    intro_calibatrion_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function intro_calibatrion_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_calibatrion_trial' ---
    // get current time
    t = intro_calibatrion_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *calibration_text* updates
    if (t >= 0.0 && calibration_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calibration_text.tStart = t;  // (not accounting for frame time here)
      calibration_text.frameNStart = frameN;  // exact frame index
      
      calibration_text.setAutoDraw(true);
    }
    
    
    // if calibration_text is active this frame...
    if (calibration_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_2 is active this frame...
    if (mouse_2.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    intro_calibatrion_trialComponents.forEach( function(thisComponent) {
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


var _mouseXYs;
function intro_calibatrion_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_calibatrion_trial' ---
    intro_calibatrion_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro_calibatrion_trial.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_2.getPos();
    _mouseButtons = mouse_2.getPressed();
    psychoJS.experiment.addData('mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_2.rightButton', _mouseButtons[2]);
    // the Routine "intro_calibatrion_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
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
      trialList: 'calibration_trials.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(calibration_trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(calibration_trialRoutineEachFrame());
      trialsLoopScheduler.add(calibration_trialRoutineEnd(snapshot));
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


var val_loop;
function val_loopLoopBegin(val_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    val_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'validation_trials.xlsx',
      seed: undefined, name: 'val_loop'
    });
    psychoJS.experiment.addLoop(val_loop); // add the loop to the experiment
    currentLoop = val_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    val_loop.forEach(function() {
      snapshot = val_loop.getSnapshot();
    
      val_loopLoopScheduler.add(importConditions(snapshot));
      val_loopLoopScheduler.add(validation_trialRoutineBegin(snapshot));
      val_loopLoopScheduler.add(validation_trialRoutineEachFrame());
      val_loopLoopScheduler.add(validation_trialRoutineEnd(snapshot));
      val_loopLoopScheduler.add(val_loopLoopEndIteration(val_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function val_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(val_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function val_loopLoopEndIteration(scheduler, snapshot) {
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


var stim_loop;
function stim_loopLoopBegin(stim_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stim_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli.xlsx',
      seed: undefined, name: 'stim_loop'
    });
    psychoJS.experiment.addLoop(stim_loop); // add the loop to the experiment
    currentLoop = stim_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    stim_loop.forEach(function() {
      snapshot = stim_loop.getSnapshot();
    
      stim_loopLoopScheduler.add(importConditions(snapshot));
      stim_loopLoopScheduler.add(stim_trialRoutineBegin(snapshot));
      stim_loopLoopScheduler.add(stim_trialRoutineEachFrame());
      stim_loopLoopScheduler.add(stim_trialRoutineEnd(snapshot));
      stim_loopLoopScheduler.add(stim_loopLoopEndIteration(stim_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function stim_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(stim_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function stim_loopLoopEndIteration(scheduler, snapshot) {
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


var calibration_trialMaxDurationReached;
var calibration_trialMaxDuration;
var calibration_trialComponents;
function calibration_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'calibration_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    calibration_trialClock.reset();
    routineTimer.reset();
    calibration_trialMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Position calibration_square using width and height of window
    var canvas = psychoJS.window.size;
    var scaling = [
      canvas[0] <= canvas[1]? 1: canvas[0] / canvas[1],
      canvas[1] <= canvas[0]? 1: canvas[1] / canvas[0]
    ];
    var newPos = [
        calibration_x * scaling[0],
        calibration_y * scaling[1]
    ];
    console.log(newPos);
    calibration_square.setPos(newPos);
    psychoJS.experiment.addData('calibration_trial.started', globalClock.getTime());
    calibration_trialMaxDuration = null
    // keep track of which components have finished
    calibration_trialComponents = [];
    calibration_trialComponents.push(calibration_square);
    calibration_trialComponents.push(mouse_3);
    
    calibration_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function calibration_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'calibration_trial' ---
    // get current time
    t = calibration_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *calibration_square* updates
    if (t >= 0.0 && calibration_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calibration_square.tStart = t;  // (not accounting for frame time here)
      calibration_square.frameNStart = frameN;  // exact frame index
      
      calibration_square.setAutoDraw(true);
    }
    
    
    // if calibration_square is active this frame...
    if (calibration_square.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_3 is active this frame...
    if (mouse_3.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_3.clickableObjects = eval(calibration_square)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_3.clickableObjects)) {
              mouse_3.clickableObjects = [mouse_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_3.clickableObjects) {
              if (obj.contains(mouse_3)) {
                  gotValidClick = true;
                  mouse_3.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_3.clicked_name.push(null);
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // Hide webcam thumbnail if eyes are in validation box
    if (webgazer.checkEyesInValidationBox() === true) {
      // If last time that eyes were outside of validation box was longer than 
      // window.eyesReturnedDelay ago, hide thumbnail
      if (
        document.getElementById('webgazerFaceFeedbackBox').style.display != 'none' &&
        (new Date).getTime() > window.eyesExitedTimestamp + window.eyesReturnedDelay
      ) {   
        document.getElementById('webgazerFaceFeedbackBox').style.display = 'none';
        document.getElementById('webgazerVideoFeed').style.display = 'none';
      }
    } else {
        // Eyes outside of validation box; show thumbnail
        window.eyesExitedTimestamp = (new Date).getTime();
        document.getElementById('webgazerFaceFeedbackBox').style.display = 'block';
        document.getElementById('webgazerVideoFeed').style.display = 'block';
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    calibration_trialComponents.forEach( function(thisComponent) {
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


function calibration_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'calibration_trial' ---
    calibration_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('calibration_trial.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_3.getPos();
    _mouseButtons = mouse_3.getPressed();
    psychoJS.experiment.addData('mouse_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_3.rightButton', _mouseButtons[2]);
    if (mouse_3.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0]);}
    // the Routine "calibration_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro_validation_trialMaxDurationReached;
var intro_validation_trialMaxDuration;
var intro_validation_trialComponents;
function intro_validation_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_validation_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    intro_validation_trialClock.reset();
    routineTimer.reset();
    intro_validation_trialMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_4
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('intro_validation_trial.started', globalClock.getTime());
    intro_validation_trialMaxDuration = null
    // keep track of which components have finished
    intro_validation_trialComponents = [];
    intro_validation_trialComponents.push(validation_text);
    intro_validation_trialComponents.push(mouse_4);
    
    intro_validation_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function intro_validation_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_validation_trial' ---
    // get current time
    t = intro_validation_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *validation_text* updates
    if (t >= 0.0 && validation_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      validation_text.tStart = t;  // (not accounting for frame time here)
      validation_text.frameNStart = frameN;  // exact frame index
      
      validation_text.setAutoDraw(true);
    }
    
    
    // if validation_text is active this frame...
    if (validation_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_4 is active this frame...
    if (mouse_4.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    intro_validation_trialComponents.forEach( function(thisComponent) {
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


function intro_validation_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_validation_trial' ---
    intro_validation_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro_validation_trial.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_4.getPos();
    _mouseButtons = mouse_4.getPressed();
    psychoJS.experiment.addData('mouse_4.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_4.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_4.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_4.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_4.rightButton', _mouseButtons[2]);
    // the Routine "intro_validation_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var validation_trialMaxDurationReached;
var validation_trialMaxDuration;
var validation_trialComponents;
function validation_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'validation_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    validation_trialClock.reset();
    routineTimer.reset();
    validation_trialMaxDurationReached = false;
    // update component parameters for each repeat
    // place the dot: val_x, val_y are fractions of the window (same scheme as the calibration points)
    var canvas = psychoJS.window.size;
    var scaling = [
      canvas[0] <= canvas[1] ? 1 : canvas[0] / canvas[1],
      canvas[1] <= canvas[0] ? 1 : canvas[1] / canvas[0]
    ];
    val_dot.setPos([val_x * scaling[0], val_y * scaling[1]]);
    // remember where the dot is on the screen (px of the browser window) and the screen/window sizes
    psychoJS.experiment.addData('val_target_px_x', Math.round(window.innerWidth / 2 + val_x * window.innerWidth));
    psychoJS.experiment.addData('val_target_px_y', Math.round(window.innerHeight / 2 - val_y * window.innerHeight));
    psychoJS.experiment.addData('win_inner_w', window.innerWidth);
    psychoJS.experiment.addData('win_inner_h', window.innerHeight);
    psychoJS.experiment.addData('screen_w', window.screen.width);
    psychoJS.experiment.addData('screen_h', window.screen.height);
    psychoJS.experiment.addData('pixel_ratio', window.devicePixelRatio);
    psychoJS.experiment.addData('user_agent', navigator.userAgent);
    gazeStart();
    psychoJS.experiment.addData('validation_trial.started', globalClock.getTime());
    validation_trialMaxDuration = 2.5
    // keep track of which components have finished
    validation_trialComponents = [];
    validation_trialComponents.push(val_dot);
    
    validation_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function validation_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'validation_trial' ---
    // get current time
    t = validation_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > validation_trialMaxDuration) {
        validation_trialMaxDurationReached = true
        continueRoutine = false
    }
    
    // *val_dot* updates
    if (t >= 0.0 && val_dot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      val_dot.tStart = t;  // (not accounting for frame time here)
      val_dot.frameNStart = frameN;  // exact frame index
      
      val_dot.setAutoDraw(true);
    }
    
    
    // if val_dot is active this frame...
    if (val_dot.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    validation_trialComponents.forEach( function(thisComponent) {
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


function validation_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'validation_trial' ---
    validation_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('validation_trial.stopped', globalClock.getTime());
    // save the gaze points of this dot into the column val_gaze
    gazeStop('val_gaze');
    // the Routine "validation_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stim_trialMaxDurationReached;
var stim_trialMaxDuration;
var stim_trialComponents;
function stim_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stim_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stim_trialClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    stim_trialMaxDurationReached = false;
    // update component parameters for each repeat
    stim_image.setImage(stim_file);
    // start recording gaze for this trial
    gazeStart();
    // fit the picture into a 0.8 x 0.8 box, keeping its proportions
    try {
      const _res = psychoJS.serverManager.getResource(stim_file);
      const _ar = (_res.naturalWidth || _res.width) / (_res.naturalHeight || _res.height);
      stim_image.size = _ar >= 1 ? [0.8, 0.8 / _ar] : [0.8 * _ar, 0.8];
    } catch (e) { console.warn('could not read image size', e); }
    psychoJS.experiment.addData('stim_trial.started', globalClock.getTime());
    stim_trialMaxDuration = null
    // keep track of which components have finished
    stim_trialComponents = [];
    stim_trialComponents.push(stim_image);
    
    stim_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function stim_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stim_trial' ---
    // get current time
    t = stim_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim_image* updates
    if (t >= 0.0 && stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_image.tStart = t;  // (not accounting for frame time here)
      stim_image.frameNStart = frameN;  // exact frame index
      
      stim_image.setAutoDraw(true);
    }
    
    
    // if stim_image is active this frame...
    if (stim_image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stim_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      stim_image.tStop = t;  // not accounting for scr refresh
      stim_image.frameNStop = frameN;  // exact frame index
      // update status
      stim_image.status = PsychoJS.Status.FINISHED;
      stim_image.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stim_trialComponents.forEach( function(thisComponent) {
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


function stim_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stim_trial' ---
    stim_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('stim_trial.stopped', globalClock.getTime());
    // save the gaze points of this trial into the column gaze_data
    gazeStop('gaze_data');
    if (routineForceEnded) {
        routineTimer.reset();} else if (stim_trialMaxDurationReached) {
        stim_trialClock.add(stim_trialMaxDuration);
    } else {
        stim_trialClock.add(5.000000);
    }
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
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
