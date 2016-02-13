/* Yes, I know, global variables are a terrible thing.
   And, in a sense, the following are global variables recording a given
   state.  However, by using this convention and documentating them in a
   single place, it helps in avoiding the creation of inconsistent states.*/
var RUR = RUR || {};
if (RUR.state === undefined){
    RUR.state = {};
}


// TODO: create RUR.state.do_highlight()
// this would be to combine all the flags required to have highlighting on

// TODO: after simplifying the permalink, see if RUR.state.prevent_playback
// is still needed.

RUR.state.set_initial_values = function () {
    /* Determines if the Python code in the editor is going to be
       highlighted in sync with playback. */
    RUR.state.highlight = true;

    /* Determines if all images are loaded, with a splash screen shown
       in the meantime.  This can help end-user identify problems
       (if splash-screen does not go away) and prevent user from clicking on
       buttons (e.g. "run") before everything is ready. */
    RUR.state.images_loaded = false;

    /* Get program input from editor, blockly or repl? */
    RUR.state.input_method = "editor";

    /* Should be self-explanatory */
    RUR.state.human_language = document.documentElement.lang;
    RUR.state.programming_language = "python"; // default

    /* Python only: set to True if watching variables */
    RUR.state.watch_vars = false;

    /* if stop button has been clicked */
    RUR.state.stop_called = false;

    RUR.state.prevent_playback = false;

    RUR.state.sound_on = false;
};

RUR.state.save = function () {
    /* Saves the current state in local storage */

    localStorage.setItem("programming_language", RUR.state.programming_language);
};

RUR.state.set_programming_language = function(lang){
    if (lang === RUR.state.programming_language) {
        return;
    }
    RUR.state.programming_language = lang;
    switch(lang){
        case 'javascript':
            $("#python_choices").hide();
            $("#javascript_choices").show();
            $("#javascript_choices").change();
            $("#editor-tab").html(RUR.translate("Javascript Code"));
            editor.setOption("mode", "javascript");
            pre_code_editor.setOption("mode", "javascript");
            post_code_editor.setOption("mode", "javascript");
            $("#library-tab").parent().hide();
            $("#python-additional-menu p button").attr("disabled", "true");
            $("#py_console").hide();
            RUR.kbd.set_programming_language("javascript");
            break;
        case 'python':
            $("#python_choices").show();
            $("#javascript_choices").hide();
            $("#python_choices").change();
            $("#editor-tab").html(RUR.translate("Python Code"));
            editor.setOption("mode", {name: "python", version: 3});
            pre_code_editor.setOption("mode", {name: "python", version: 3});
            post_code_editor.setOption("mode", {name: "python", version: 3});
            $("#library-tab").parent().show();
            $("#python-additional-menu p button").removeAttr("disabled");
            RUR.kbd.set_programming_language("python");
            break;
        default:
            console.log("PROBLEM: RUR.state.set_programming_language called without args.");
    }
    $("#editor-tab").click(); // also handles #highlight and #watch-vars

    try {
        RUR.reset_code_in_editors();
    } catch (e) {}

};
