export interface DialogueOption {
    text: string;
    nextId: string;
}

export interface DialogueNode {
    id: string;
    emotion: string;
    quote: string;
    options?: DialogueOption[];
    nextId?: string;
}

export interface SpriteNote {
    emotion: string;
    url: string;
}

export const sprites: SpriteNote[] = [
    { emotion: "surprised", url: "/sprite-placeholder.png" },
    { emotion: "happy", url: "/sprite-placeholder.png" },
    { emotion: "neutral", url: "/sprite-placeholder.png" },
    { emotion: "proud", url: "/sprite-placeholder.png" },
    { emotion: "embarrassed", url: "/sprite-placeholder.png" },
    { emotion: "confident", url: "/sprite-placeholder.png" },
    { emotion: "smile", url: "/sprite-placeholder.png" },
    { emotion: "thinking", url: "/sprite-placeholder.png" },
    { emotion: "sad", url: "/sprite-placeholder.png" },
    { emotion: "warm", url: "/sprite-placeholder.png" },
    { emotion: "playful", url: "/sprite-placeholder.png" },
    { emotion: "thoughtful", url: "/sprite-placeholder.png" },
    { emotion: "laughing", url: "/sprite-placeholder.png" },
    { emotion: "motivated", url: "/sprite-placeholder.png" },
];

export const dialogue: DialogueNode[] = [
    { id: "start", emotion: "surprised", quote: "Oh, Hi!", nextId: "see_you" },
    {
        id: "see_you",
        emotion: "surprised",
        quote: "Didn’t quite see you there",
        nextId: "thank_you",
    },
    {
        id: "thank_you",
        emotion: "happy",
        quote: "Thank you for being here, tho",
        nextId: "place_question",
    },

    {
        id: "place_question",
        emotion: "happy",
        quote: "Say, what do you think of the place?",
        options: [
            { text: "It's awesome!", nextId: "awesome_response" },
            { text: "Looks cozy.", nextId: "cozy_response" },
            { text: "Pretty different", nextId: "different_response" },
        ],
    },

    {
        id: "awesome_response",
        emotion: "excited",
        quote: "Thank you! Glad you like it.",
        nextId: "always_like_this",
    },
    {
        id: "cozy_response",
        emotion: "happy",
        quote: "Thanks! Hope you feel at home.",
        nextId: "always_like_this",
    },
    {
        id: "different_response",
        emotion: "happy",
        quote: "Haha, I’ll take it as a compliment.",
        nextId: "always_like_this",
    },

    {
        id: "always_like_this",
        emotion: "neutral",
        quote: "You see, I’ve always been like this...",
        nextId: "artist_dev",
    },
    {
        id: "artist_dev",
        emotion: "neutral",
        quote: "Artist by the day, developer by the night",
        nextId: "merge_portfolio",
    },
    {
        id: "merge_portfolio",
        emotion: "happy",
        quote: "So I thought, why not merge that into my portfolio?",
        nextId: "hope_you_like",
    },
    {
        id: "hope_you_like",
        emotion: "happy",
        quote: "Hope you find it cool as well!",
        nextId: "manners",
    },
    {
        id: "manners",
        emotion: "neutral",
        quote: "Oh, where are my manners?",
        nextId: "name_intro",
    },
    {
        id: "name_intro",
        emotion: "happy",
        quote: "I’m Fillip, you can call me Lipe",
        nextId: "nice_to_meet",
    },
    {
        id: "nice_to_meet",
        emotion: "happy",
        quote: "Nice to meet you!",
        options: [{ text: "Nice to meet you too.", nextId: "i_did_this" }],
    },

    {
        id: "i_did_this",
        emotion: "proud",
        quote: "I did all this by myself, you know, from code to visuals",
        nextId: "not_music",
    },
    {
        id: "not_music",
        emotion: "embarrassed",
        quote: "Just not the music, ‘cause I’m not there yet…",
        nextId: "frontend_cool",
    },
    {
        id: "frontend_cool",
        emotion: "confident",
        quote: "But, hey, for a front-end developer it’s really cool right?",
        nextId: "stack_mention",
    },
    {
        id: "stack_mention",
        emotion: "neutral",
        quote: "I work mostly with React, Next.js and Typescript.",
        nextId: "fullstack_too",
    },
    {
        id: "fullstack_too",
        emotion: "neutral",
        quote: "Though I have fullstack experience too",
        nextId: "tech_list",
    },
    {
        id: "tech_list",
        emotion: "neutral",
        quote: "Like, Node, Php, MySQL, all that jazz",
        options: [
            { text: "Oh, you’re a dev dev.", nextId: "dev_dev_response" },
            { text: "That’s a lot of tech!", nextId: "tech_response" },
            { text: "Why this format though?", nextId: "good_question" },
        ],
    },

    {
        id: "dev_dev_response",
        emotion: "smile",
        quote: "Haha, I guess so! At least I try my best to be.",
        nextId: "i_like_different",
    },
    {
        id: "tech_response",
        emotion: "proud",
        quote: "I’ve been in this for more than 5 years.",
        nextId: "the_least_i_could",
    },
    {
        id: "the_least_i_could",
        emotion: "proud",
        quote: " It’s the least I could do.",
        nextId: "i_like_different",
    },
    {
        id: "good_question",
        emotion: "proud",
        quote: "Good question!",
        nextId: "i_like_different",
    },
    {
        id: "i_like_different",
        emotion: "neutral",
        quote: "I like doing things differently, you see.",
        nextId: "emotion_missing",
    },
    {
        id: "emotion_missing",
        emotion: "sad",
        quote: "Things nowadays lack emotion",
        nextId: "web_full_of",
    },
    {
        id: "web_full_of",
        emotion: "neutral",
        quote: "I believe the web is already full of things that just works",
        nextId: "feel_welcomed",
    },
    {
        id: "feel_welcomed",
        emotion: "warm",
        quote: "But few little things make you feel welcomed",
        nextId: "build_personality",
    },
    {
        id: "build_personality",
        emotion: "warm",
        quote: "And I like to build things with personality",
        options: [
            { text: "So it’s like… Dev + Vibes?", nextId: "dev_vibes_answer" },
            { text: "What do you mean?", nextId: "minimalism_talk" },
            { text: "That’s so cool!", nextId: "i_know_right" },
        ],
    },

    {
        id: "dev_vibes_answer",
        emotion: "playful",
        quote: "Haha, yes! Guess you could say that",
        nextId: "never_said_it",
    },
    {
        id: "never_said_it",
        emotion: "smile",
        quote: "I’ve never described it as “Dev + vibes” though",
        nextId: "experience_talk",
    },

    {
        id: "minimalism_talk",
        emotion: "neutral",
        quote: "With the increase of minimalism, I think most apps look alike these days.",
        nextId: "target_audience",
    },
    {
        id: "target_audience",
        emotion: "neutral",
        quote: "It seems like the target audience is reduced to the colors and font of the logo.",
        nextId: "shouldnt_be",
    },
    {
        id: "shouldnt_be",
        emotion: "sad",
        quote: "I don’t think it should be like that",
        nextId: "if_for_devs",
    },
    {
        id: "if_for_devs",
        emotion: "neutral",
        quote: "If I’m building something for developers, for example",
        nextId: "i_use_what_they_like",
    },
    {
        id: "i_use_what_they_like",
        emotion: "confident",
        quote: "I’ll try to use what they are used to have",
        nextId: "icons_shortcuts",
    },
    {
        id: "icons_shortcuts",
        emotion: "confident",
        quote: "That includes shortcuts, icons etc.",
        nextId: "so_cool",
    },

    {
        id: "i_know_right",
        emotion: "excited",
        quote: "I know right??",
        nextId: "experience_talk",
    },

    {
        id: "experience_talk",
        emotion: "neutral",
        quote: "Anyway, working in tech for about 5 years, I’ve been through a lot",
        nextId: "product_mention",
    },
    {
        id: "product_mention",
        emotion: "neutral",
        quote: "Got experience with product design, dev teams, performance, all that.",
        nextId: "bragging",
    },
    {
        id: "bragging",
        emotion: "confident",
        quote: "If I am to brag about myself, I think my app’s performances are the best out there!",
        nextId: "test_yourself",
    },
    {
        id: "test_yourself",
        emotion: "smile",
        quote: "Try it yourself, see the performance this website has.",
        nextId: "college_study",
    },
    {
        id: "college_study",
        emotion: "neutral",
        quote: "I’m currently studying Systems Analysis and Development at College",
        nextId: "keep_learning",
    },
    {
        id: "keep_learning",
        emotion: "motivated",
        quote: "It’s a great way to learn new things and keep pushing me forward",
        options: [
            { text: "What do you do, besides code?", nextId: "artist_actor" },
        ],
    },
    {
        id: "artist_actor",
        emotion: "neutral",
        quote: "Besides code? Well… I said I am an artist",
        nextId: "actor_too",
    },
    {
        id: "actor_too",
        emotion: "smile",
        quote: "But I am also an actor!",
        nextId: "helps_with_comm",
    },
    {
        id: "helps_with_comm",
        emotion: "thoughtful",
        quote: "Which, believe it or not, helps me a lot with communication and empathy.",
        options: [{ text: "Wait. You code AND act?", nextId: "weird_life" }],
    },

    {
        id: "weird_life",
        emotion: "laughing",
        quote: "Right? Haha. Life’s weird like that",
        nextId: "know_everything",
    },
    {
        id: "know_everything",
        emotion: "playful",
        quote: "You can say I know a bit of everything by now.",
        nextId: "collab_invite",
    },
    {
        id: "collab_invite",
        emotion: "happy",
        quote: "If you ever wanna talk dev, collab, or just vibe, hit me up!",
        nextId: "check_projects",
    },

    {
        id: "check_projects",
        emotion: "neutral",
        quote: "But enough about me, want to check my projects?",
        options: [
            { text: "Know what, sure!", nextId: "go_projects" },
            { text: "Maybe another time, but thanks!", nextId: "end" },
        ],
    },
];
