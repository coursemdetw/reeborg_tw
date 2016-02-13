
$(document).ready(function() {
    "use strict";
    var prog_lang, url_query, name;
    RUR.state.human_language = document.documentElement.lang;

    RUR.state.set_initial_values();

    function everything_loaded () {
        var loaded, total_images, py_modules=0;
        if (RUR.objects.loaded_images == RUR.objects.nb_images &&
            RUR.vis_robot.loaded_images == RUR.vis_robot.nb_images){
            RUR.vis_world.draw_all();
            $("#splash-screen").hide();
        } else {
            loaded = RUR.objects.loaded_images + RUR.vis_robot.loaded_images;
            total_images = RUR.objects.nb_images + RUR.vis_robot.nb_images;
            if (!RUR.state.images_loaded) {
                $("#splash-text").html("Loading Python modules. <br>Images: " + loaded + "/" + total_images);
            } else {
                $("#splash-text").html("Images: " + loaded + "/" + total_images);
            }
            requestAnimationFrame(everything_loaded);
        }
    }
    everything_loaded();

    RUR.rec.reset();
    try {
        RUR.world_select.set_url(localStorage.getItem(RUR.settings.world));
    } catch (e) {
        RUR.world_select.set_default();
    }

    RUR.tooltip.init();

    // check if this is needed or does conflict with MakeCustomMenu
    RUR.settings.initial_world = localStorage.getItem(RUR.settings.world);

    RUR.cd.create_custom_dialogs();
    RUR.zz_dr_dialogs();
    RUR.zz_dr_onclick();
    RUR.zz_dr_onchange();
    RUR.zz_dr_editor_ui();

    brython({debug:1, pythonpath:['src/python']});

    RUR.ui.show_only_reload2(false);

    try {
        RUR.reset_code_in_editors();
    } catch (e){
        console.log(e);
        RUR.cd.show_feedback("#Reeborg-shouts",
                        "Your browser does not support localStorage. " +
                        "You will not be able to save your functions in the library.");
    }
    // for embedding in iframe
    addEventListener("message", receiveMessage, false);
    function receiveMessage(event){
        RUR.permalink.update(event.data);
    }

    RUR.ui.set_ready_to_run();
    RUR.kbd.select();

    RUR.make_default_menu(RUR.state.human_language);


    url_query = parseUri(window.location.href);
    if (url_query.queryKey.proglang !== undefined &&
       url_query.queryKey.world !== undefined &&
       url_query.queryKey.editor !== undefined &&
       url_query.queryKey.library !== undefined) {
        prog_lang = url_query.queryKey.proglang;
        $('input[type=radio][name=programming_language]').val([prog_lang]);
        RUR.reset_programming_language(prog_lang);
        RUR.world.import_world(decodeURIComponent(url_query.queryKey.world));
        name = RUR.translate("PERMALINK");
        localStorage.setItem("user_world:"+ name, RUR.world.export_world());
        RUR.storage.save_world(name);

        editor.setValue(decodeURIComponent(url_query.queryKey.editor));
        library.setValue(decodeURIComponent(url_query.queryKey.library));
    } else {
        prog_lang = localStorage.getItem("last_programming_language_" + RUR.state.human_language);
        switch (prog_lang) {
            case 'python-' + RUR.state.human_language:
                $("#python_choices").val("editor").change();  // jshint ignore:line
            case 'javascript-' + RUR.state.human_language:
                $("#javascript_choices").val("editor").change(); // jshint ignore:line
            default:
                RUR.reset_programming_language('python-' + RUR.state.human_language);
        }
        // trigger it to load the initial world.
        $("#select_world").change();
    }
});
