function searchAgent() {
    let agentName = $("#agent-input").val().toLowerCase();
    let baseURL = "https://valorant-api.com/v1/agents/";
    let agentID;
    switch (agentName) {
        case "gekko":
            agentID = "e370fa57-4757-3604-3648-499e1f642d3f";
            break;
        case "fade":
            agentID = "dade69b4-4f5a-8528-247b-219e5a1facd6";
            break;
        case "breach":
            agentID = "5f8d3a7f-467b-97f3-062c-13acf203c006";
            break;
        case "raze":
            agentID = "f94c3b30-42be-e959-889c-5aa313dba261";
            break;
        case "chamber":
            agentID = "22697a3d-45bf-8dd7-4fec-84a9e28c69d7";
            break;
        case "kay/o":
            agentID = "601dbbe7-43ce-be57-2a40-4abd24953621";
            break;
        case "skye":
            agentID = "6f2a04ca-43e0-be17-7f36-b3908627744d";
            break;
        case "cypher":
            agentID = "117ed9e3-49f3-6512-3ccf-0cada7e3823b";
            break;
        case "sova":
            agentID = "320b2a48-4d9b-a075-30f1-1f93a9b638fa";
            break;
        case "killjoy":
            agentID = "1e58de9c-4950-5125-93e9-a0aee9f98746";
            break;
        case "harbor":
            agentID = "95b78ed7-4637-86d9-7e41-71ba8c293152";
            break;
        case "viper":
            agentID = "707eab51-4836-f488-046a-cda6bf494859";
            break;
        case "phoenix":
            agentID = "eb93336a-449b-9c1b-0a54-a891f7921d69";
            break;
        case "astra":
            agentID = "41fb69c1-4189-7b37-f117-bcaf1e96f1bf";
            break;
        case "brimstone":
            agentID = "9f0d8ba9-4140-b941-57d3-a7ad57c6b417";
            break;
        case "neon":
            agentID = "bb2a4828-46eb-8cd1-e765-15848195d751";
            break;
        case "yoru":
            agentID = "7f94d92c-4234-0a36-9646-3a87eb8b5c89";
            break;
        case "sage":
            agentID = "569fdd95-4d10-43ab-ca70-79becc718b46";
            break;
        case "reyna":
            agentID = "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc";
            break;
        case "omen":
            agentID = "8e253930-4c05-31dd-1b6c-968525494517";
            break;
        case "jett":
            agentID = "add6443a-41bd-e414-f6ad-e58d267f4e95";
            break;
        default:
            agentID = "none";
    }
    if (agentID === "none") {
        $("#invalid-agent").css("display", "block");
    } else {
        let fullURL = baseURL + agentID;
        $.get(fullURL, function(object) {
            let name = object.data.displayName;
            $("#agent-name").text(name);
            
            let role = object.data.role.displayName.toUpperCase();
            $("#role").text(role);

            let biography = object.data.description;
            $("#biography").text(biography);

            let ability1Title = object.data.abilities[0].displayName + ":";
            let ability1Description = object.data.abilities[0].description;
            $("#a1-title").text(ability1Title);
            $("#a1-description").text(ability1Description);

            let ability2Title = object.data.abilities[1].displayName + ":";
            let ability2Description = object.data.abilities[1].description;
            $("#a2-title").text(ability2Title);
            $("#a2-description").text(ability2Description);

            let ability3Title = object.data.abilities[2].displayName + ":";
            let ability3Description = object.data.abilities[2].description;
            $("#a3-title").text(ability3Title);
            $("#a3-description").text(ability3Description);

            let ability4Title = object.data.abilities[3].displayName + ":";
            let ability4Description = object.data.abilities[3].description;
            $("#a4-title").text(ability4Title);
            $("#a4-description").text(ability4Description);

            let imgSource = object.data.fullPortraitV2;
            $("#agent-img").attr("src", imgSource);
        })
        $("body").css("background-image", "none");
        $("body").css("background-color", "#0e1a26");
        $("#search-panel").css("display", "none");
        $("#agent-info-panel").css("display", "flex");
    }
}

function searchAgain() {
    changeWallpaper();
    $("#agent-input").val("");
    $("#invalid-agent").css("display", "none");
    $("#agent-info-panel").css("display", "none");
    $("#search-panel").css("display", "block");
}

function changeWallpaper() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            $("body").css("background-image", "url(images/valorant-map1.jpg)");
            break;
        case 1:
            $("body").css("background-image", "url(images/valorant-map2.jpg)");
            break;
        case 2:
            $("body").css("background-image", "url(images/valorant-map3.jpg)");
            break;
    }
}