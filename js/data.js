const pathToImages = "images/";
const suffix = ".jpeg";
const arrayOfEmotions = [
    { name: "exhausted", hint: "She was too _____ and distressed to talk about the tragedy." },
    { name: "angry", hint: "When you are ____, you feel strong dislike or impatience about something." },
    { name: "embarrassed", hint: "A person who is _____ feels shy, ashamed, or guilty about something." },
    { name: "enraged", hint: "I began getting more and more _____ at my father." },
    { name: "overwhelmed", hint: "His wife was _____ to see him back safe." },
    { name: "bored", hint: "If you are _____, you feel tired and impatient because you have lost interest in something or because you have nothing to do." },
    { name: "confused", hint: "If you are _____, you do not know exactly what is happening or what to do." },
    { name: "hysterical", hint: "Someone who is _____ is in a state of violent and disturbed emotion that is usually a result of shock." },
    { name: "happy", hint: "Someone who is _____ has feelings of pleasure, usually because something nice has happened or because they feel satisfied with their life." },
    { name: "ashamed", hint: "If someone is _____, they feel embarrassed or guilty because of something they do or they have done, or because of their appearance." },
    { name: "hopeful", hint: "If you are _____, you are fairly confident that something that you want to happen will happen." },
    { name: "surprised", hint: "If you are _____ at something, you have a feeling of surprise, because it is unexpected or unusual." },
    { name: "ecstatic", hint: "If you are _____, you feel very happy and full of excitement." },
    { name: "frustrated", hint: "His unresolved difficulty left him absolutely _____." },
    { name: "mischievous", hint: "A _____ person likes to have fun by playing harmless tricks on people or doing things they are not supposed to do." },
    { name: "cautious", hint: "Someone who is _____ acts very carefully in order to avoid possible danger." },
    { name: "lonely", hint: "Someone who is _____ is unhappy because they are alone or do not have anyone they can talk to." },
    { name: "anxious", hint: "If you are _____, you are nervous or worried about something." },
    { name: "guilty", hint: "If you feel _____, you feel unhappy because you think that you have done something wrong or have failed to do something which you should have done." },
    { name: "sad", hint: "If you are _____, you feel unhappy, usually because something has happened that you do not like." },
    { name: "disgusted", hint: "If you are _____, you feel a strong sense of dislike and disapproval at something." },
    { name: "smug", hint: "Thomas and his wife looked at each other in ______ satisfaction." },
    { name: "lovestruck", hint: "She had told friends she was 'completely _____'." },
    { name: "shocked", hint: "This was a nasty attack and the victim is still very _____." },
    { name: "suspicious", hint: "He was rightly ______ of meeting me until I reassured him I was not writing about him." },
    { name: "confident", hint: "If a person or their manner is _____, they feel sure about their own abilities, qualities, or ideas." },
    { name: "frightened", hint: "If you are _____, you are anxious or afraid, often because of something that has just happened or that you think may happen." },
    { name: "depressed", hint: "If you are _____, you are sad and feel that you cannot enjoy anything, because your situation is so difficult and unpleasant." },
    { name: "jealous", hint: "If someone is _____, they feel angry or bitter because they think that another person is trying to take a lover or friend, or a possession, away from them." },
    { name: "shy", hint: "A _____ person is nervous and uncomfortable in the company of other people." }
];
const stringOfLetters = "abcdefghijklmnopqrstuvwxyz";
const maxWrongAnswers = 6;
