


//% weight=100 color=#1ABC9C icon="\uf136" block="Voice Recognition (SEN0539)"
namespace voiceRecognition {

    export enum MUTE {
        //% blockId="voiceRecognition_MUTEOFF" block="OFF"
        OFF = 0,
        //% blockId="voiceRecognition_MUTEON" block="ON"
        ON = 1
    }

    export enum WakeupWords {
        //% blockId="voiceRecognition_W1" block="Wake-up words for learning"
        W1 = 1,
        //% blockId="voiceRecognition_W2" block="Hello robot"
        W2 = 2,
        //% blockId="voiceRecognition_W3" block="---"
        W3 = 3,
    }

    export enum LearningCommandWords {
        //% blockId="voiceRecognition_W5" block=" The first custom command "
        W5 = 5,
        //% blockId="voiceRecognition_W6" block="The second custom command"
        W6 = 6,
        //% blockId="voiceRecognition_W7" block="The third custom command"
        W7 = 7,
        //% blockId="voiceRecognition_W8" block="The fourth custom command"
        W8 = 8,
        //% blockId="voiceRecognition_W9" block="The fifth custom command"
        W9 = 9,
        //% blockId="voiceRecognition_W10" block="The sixth custom command"
        W10 = 10,
        //% blockId="voiceRecognition_W11" block="The seventh custom command"
        W11 = 11,
        //% blockId="voiceRecognition_W12" block="The eighth custom command"
        W12 = 12,
        //% blockId="voiceRecognition_W13" block="The ninth custom command"
        W13 = 13,
        //% blockId="voiceRecognition_W14" block="The tenth custom command"
        W14 = 14,
        //% blockId="voiceRecognition_W15" block="The eleventh custom command"
        W15 = 15,
        //% blockId="voiceRecognition_W16" block="The twelfth custom command"
        W16 = 16,
        //% blockId="voiceRecognition_W17" block="The thirteenth custom command"
        W17 = 17,
        //% blockId="voiceRecognition_W18" block="The fourteenth custom command"
        W18 = 18,
        //% blockId="voiceRecognition_W19" block="The fifteenth custom command"
        W19 = 19,
        //% blockId="voiceRecognition_W20" block="The sixteenth custom command"
        W20 = 20,
        //% blockId="voiceRecognition_W21" block="The seventeenth custom command"
        W21 = 21
    }
    
    export enum FixedCommandWords {
        //% blockId="voiceRecognition_W22" block="Go forward"
        W22 = 22,
        //% blockId="voiceRecognition_W23" block="Retreat"
        W23 = 23,
        //% blockId="voiceRecognition_W24" block="Park a car"
        W24 = 24,
        //% blockId="voiceRecognition_W25" block="Turn left ninety degrees"
        W25 = 25,
        //% blockId="voiceRecognition_W26" block="Turn left forty-five degrees"
        W26 = 26,
        //% blockId="voiceRecognition_W27" block="Turn left thirty degrees"
        W27 = 27,
        //% blockId="voiceRecognition_W28" block="Turn right ninety degrees"
        W28 = 28,
        //% blockId="voiceRecognition_W29" block="Turn right forty-five degrees"
        W29 = 29,
        //% blockId="voiceRecognition_W30" block="Turn right thirty degrees"
        W30 = 30,
        //% blockId="voiceRecognition_W31" block="Shift down a gear"
        W31 = 31,
        //% blockId="voiceRecognition_W32" block="Line tracking mode"
        W32 = 32,
        //% blockId="voiceRecognition_W33" block="Light tracking mode"
        W33 = 33,
        //% blockId="voiceRecognition_W34" block="Bluetooth mode"
        W34 = 34,
        //% blockId="voiceRecognition_W35" block="Obstacle avoidance mode"
        W35 = 35,
        //% blockId="voiceRecognition_W36" block="Face recognition"
        W36 = 36,
        //% blockId="voiceRecognition_W37" block="Object tracking"
        W37 = 37,
        //% blockId="voiceRecognition_W38" block="Object recognition"
        W38 = 38,
        //% blockId="voiceRecognition_W39" block="Line tracking"
        W39 = 39,
        //% blockId="voiceRecognition_W40" block="Color recognition"
        W40 = 40,
        //% blockId="voiceRecognition_W41" block="Tag recognition"
        W41 = 41,
        //% blockId="voiceRecognition_W42" block="Object sorting"
        W42 = 42,
        //% blockId="voiceRecognition_W43" block="Qr code recognition"
        W43 = 43,
        //% blockId="voiceRecognition_W44" block="General settings"
        W44 = 44,
        //% blockId="voiceRecognition_W45" block="Clear screen"
        W45 = 45,
        //% blockId="voiceRecognition_W46" block="Learn once"
        W46 = 46,
        //% blockId="voiceRecognition_W47" block="Forget"
        W47 = 47,
        //% blockId="voiceRecognition_W48" block="Load model"
        W48 = 48,
        //% blockId="voiceRecognition_W49" block="Save model"
        W49 = 49,
        //% blockId="voiceRecognition_W50" block="Take photos and save them"
        W50 = 50,
        //% blockId="voiceRecognition_W51" block="Save and return"
        W51 = 51,
        //% blockId="voiceRecognition_W52" block="Display number zero"
        W52 = 52,
        //% blockId="voiceRecognition_W53" block="Display number one"
        W53 = 53,
        //% blockId="voiceRecognition_W54" block="Display number two"
        W54 = 54,
        //% blockId="voiceRecognition_W55" block="Display number three"
        W55 = 55,
        //% blockId="voiceRecognition_W56" block="Display number four"
        W56 = 56,
        //% blockId="voiceRecognition_W57" block="Display number five"
        W57 = 57,
        //% blockId="voiceRecognition_W58" block="Display number six"
        W58 = 58,
        //% blockId="voiceRecognition_W59" block="Display number seven"
        W59 = 59,
        //% blockId="voiceRecognition_W60" block="Display number eight"
        W60 = 60,
        //% blockId="voiceRecognition_W61" block="Display number nine"
        W61 = 61,
        //% blockId="voiceRecognition_W62" block="Display smiley face"
        W62 = 62,
        //% blockId="voiceRecognition_W63" block="Display crying face"
        W63 = 63,
        //% blockId="voiceRecognition_W64" block="Display heart"
        W64 = 64,
        //% blockId="voiceRecognition_W65" block="Turn off dot matrix"
        W65 = 65,
        //% blockId="voiceRecognition_W66" block="Read current posture"
        W66 = 66,
        //% blockId="voiceRecognition_W67" block="Read ambient light"
        W67 = 67,
        //% blockId="voiceRecognition_W68" block="Read compass"
        W68 = 68,
        //% blockId="voiceRecognition_W69" block="Read temperature"
        W69 = 69,
        //% blockId="voiceRecognition_W70" block="Read acceleration"
        W70 = 70,
        //% blockId="voiceRecognition_W71" block="Reading sound intensity"
        W71 = 71,
        //% blockId="voiceRecognition_W72" block="Calibrate electronic gyroscope"
        W72 = 72,
        //% blockId="voiceRecognition_W73" block="Turn on the camera"
        W73 = 73,
        //% blockId="voiceRecognition_W74" block="Turn off the camera"
        W74 = 74,
        //% blockId="voiceRecognition_W75" block="Turn on the fan"
        W75 = 75,
        //% blockId="voiceRecognition_W76" block="Turn off the fan"
        W76 = 76,
        //% blockId="voiceRecognition_W77" block="Turn fan speed to gear one"
        W77 = 77,
        //% blockId="voiceRecognition_W78" block="Turn fan speed to gear two"
        W78 = 78,
        //% blockId="voiceRecognition_W79" block="Turn fan speed to gear three"
        W79 = 79,
        //% blockId="voiceRecognition_W80" block="Start oscillating"
        W80 = 80,
        //% blockId="voiceRecognition_W81" block="Stop oscillating"
        W81 = 81,
        //% blockId="voiceRecognition_W82" block="Reset"
        W82 = 82,
        //% blockId="voiceRecognition_W83" block="Set servo to ten degrees"
        W83 = 83,
        //% blockId="voiceRecognition_W84" block="Set servo to thirty degrees"
        W84 = 84,
        //% blockId="voiceRecognition_W85" block="Set servo to forty-five degrees"
        W85 = 85,
        //% blockId="voiceRecognition_W86" block="Set servo to sixty degrees"
        W86 = 86,
        //% blockId="voiceRecognition_W87" block="Set servo to ninety degrees"
        W87 = 87,
        //% blockId="voiceRecognition_W88" block="Turn on the buzzer"
        W88 = 88,
        //% blockId="voiceRecognition_W89" block="Turn off the buzzer"
        W89 = 89,
        //% blockId="voiceRecognition_W90" block="Turn on the speaker"
        W90 = 90,
        //% blockId="voiceRecognition_W91" block="Turn off the speaker"
        W91 = 91,
        //% blockId="voiceRecognition_W92" block="Play music"
        W92 = 92,
        //% blockId="voiceRecognition_W93" block="Stop playing"
        W93 = 93,
        //% blockId="voiceRecognition_W94" block="The last track"
        W94 = 94,
        //% blockId="voiceRecognition_W95" block="The next track"
        W95 = 95,
        //% blockId="voiceRecognition_W96" block="Repeat this track"
        W96 = 96,
        //% blockId="voiceRecognition_W97" block="Volume up"
        W97 = 97,
        //% blockId="voiceRecognition_W98" block="Volume down"
        W98 = 98,
        //% blockId="voiceRecognition_W99" block="Change volume to maximum"
        W99 = 99,
        //% blockId="voiceRecognition_W100" block="Change volume to minimum"
        W100 = 100,
        //% blockId="voiceRecognition_W101" block="Change volume to medium"
        W101 = 101,
        //% blockId="voiceRecognition_W102" block="Play poem"
        W102 = 102,
        //% blockId="voiceRecognition_W103" block="Turn on the light"
        W103 = 103,
        //% blockId="voiceRecognition_W104" block="Turn off the light"
        W104 = 104,
        //% blockId="voiceRecognition_W105" block="Brighten the light"
        W105 = 105,
        //% blockId="voiceRecognition_W106" block="Dim the light"
        W106 = 106,
        //% blockId="voiceRecognition_W107" block="Adjust brightness to maximum"
        W107 = 107,
        //% blockId="voiceRecognition_W108" block="Adjust brightness to minimum"
        W108 = 108,
        //% blockId="voiceRecognition_W109" block="Increase color temperature"
        W109 = 109,
        //% blockId="voiceRecognition_W110" block="Decrease color temperature"
        W110 = 110,
        //% blockId="voiceRecognition_W111" block="Adjust color temperature to maximum"
        W111 = 111,
        //% blockId="voiceRecognition_W112" block="Adjust color temperature to minimum"
        W112 = 112,
        //% blockId="voiceRecognition_W113" block="Daylight mode"
        W113 = 113,
        //% blockId="voiceRecognition_W114" block="Moonlight mode"
        W114 = 114,
        //% blockId="voiceRecognition_W115" block="Color mode"
        W115 = 115,
        //% blockId="voiceRecognition_W116" block="Set to red"
        W116 = 116,
        //% blockId="voiceRecognition_W117" block="Set to orange"
        W117 = 117,
        //% blockId="voiceRecognition_W118" block="Set to yellow"
        W118 = 118,
        //% blockId="voiceRecognition_W119" block="Set to green"
        W119 = 119,
        //% blockId="voiceRecognition_W120" block="Set to cyan"
        W120 = 120,
        //% blockId="voiceRecognition_W121" block="Set to blue"
        W121 = 121,
        //% blockId="voiceRecognition_W122" block="Set to purple"
        W122 = 122,
        //% blockId="voiceRecognition_W123" block="Set to white"
        W123 = 123,
        //% blockId="voiceRecognition_W124" block="Turn on ac"
        W124 = 124,
        //% blockId="voiceRecognition_W125" block="Turn off ac"
        W125 = 125,
        //% blockId="voiceRecognition_W126" block="Increase temperature"
        W126 = 126,
        //% blockId="voiceRecognition_W127" block="Decrease temperature"
        W127 = 127,
        //% blockId="voiceRecognition_W128" block="Cool mode"
        W128 = 128,
        //% blockId="voiceRecognition_W129" block="Heat mode"
        W129 = 129,
        //% blockId="voiceRecognition_W130" block="Auto mode"
        W130 = 130,
        //% blockId="voiceRecognition_W131" block="Dry mode"
        W131 = 131,
        //% blockId="voiceRecognition_W132" block="Fan mode"
        W132 = 132,
        //% blockId="voiceRecognition_W133" block="Enable blowing up and down"
        W133 = 133,
        //% blockId="voiceRecognition_W134" block="Disable blowing up and down"
        W134 = 134,
        //% blockId="voiceRecognition_W135" block="Enable blowing right and left"
        W135 = 135,
        //% blockId="voiceRecognition_W136" block="Disable blowing right and left"
        W136 = 136,
        //% blockId="voiceRecognition_W137" block="Open the window"
        W137 = 137,
        //% blockId="voiceRecognition_W138" block="Close the window"
        W138 = 138,
        //% blockId="voiceRecognition_W139" block="Open curtain"
        W139 = 139,
        //% blockId="voiceRecognition_W140" block="Close curtain"
        W140 = 140,
        //% blockId="voiceRecognition_W141" block="Open the door"
        W141 = 141,
        //% blockId="voiceRecognition_W142" block="Close the door"
        W142 = 142,
        //% blockId="voiceRecognition_W143" block="---"
        W143 = 143,
        //% blockId="voiceRecognition_W144" block="---"
        W144 = 144,
        //% blockId="voiceRecognition_W145" block="---"
        W145 = 145,
        //% blockId="voiceRecognition_W146" block="---"
        W146 = 146,
        //% blockId="voiceRecognition_W147" block="---"
        W147 = 147,
        //% blockId="voiceRecognition_W148" block="---"
        W148 = 148,
        //% blockId="voiceRecognition_W149" block="---"
        W149 = 149,
        //% blockId="voiceRecognition_W150" block="---"
        W150 = 150,
        //% blockId="voiceRecognition_W151" block="---"
        W151 = 151,
        //% blockId="voiceRecognition_W152" block="---"
        W152 = 152,
        //% blockId="voiceRecognition_W153" block="---"
        W153 = 153,
        //% blockId="voiceRecognition_W154" block="---"
        W154 = 154,
        //% blockId="voiceRecognition_W155" block="---"
        W155 = 155,
        //% blockId="voiceRecognition_W156" block="---"
        W156 = 156 
    }

    export enum LearningRelatedCommands {
        //% blockId="voiceRecognition_W200" block="Learning wake word"
        W200 = 200,
        //% blockId="voiceRecognition_W201" block="Learning command word"
        W201 = 201,
        //% blockId="voiceRecognition_W202" block="Re_learn"
        W202 = 202,
        //% blockId="voiceRecognition_W203" block="Exit learning"
        W203 = 203,
        //% blockId="voiceRecognition_W204" block="I want to delete"
        W204 = 204,
        //% blockId="voiceRecognition_W205" block="Delete wake word"
        W205 = 205,
        //% blockId="voiceRecognition_W206" block="Delete command word"
        W206 = 206,
        //% blockId="voiceRecognition_W207" block="Exit deleting"
        W207 = 207,
        //% blockId="voiceRecognition_W208" block="Delete all"
        W208 = 208
    }

    /**
     * 
     */

    //% weight=100
    //% blockId=voiceRecognition_init block="Voice Recognition setup I2C mode address 0x64"
    export function init(): void {

    }

    /**
     * 
     */

    //% weight=98
    //% blockId=voiceRecognition_setVolume block="set volume|%volume"
    //% volume.min=0 volume.max=20 volume.defl=8
    export function setVolume(volume: number): void {

    }

    /**
     * 
     */

    //% weight=95
    //% blockId=voiceRecognition_setMuteMode block="set mute mode|%mute"
    //% advanced=true
    export function setMuteMode(mute: MUTE): void {

    }

    /**
     * 
     */

    //% weight=90
    //% blockId=voiceRecognition_setWakeTime block="set wake time|%time"
    //% time.min=0 time.max=255 time.defl=20
    export function setWakeTime(time: number): void {

    }

    /**
     * 
     */

    //% weight=85
    //% blockId=voiceRecognition_getWakeTime block="get wake time"
    //% advanced=true
    export function getWakeTime(): number {
        return 100;
    }

    /**
     * 
     */

    //% weight=80
    //% blockId=voiceRecognition_playByCMDID block="play|%id"
    //% id.defl=23
    export function playByCMDID(id: number): void {

    }

    /**
     * 
     */

    //% weight=75
    //% blockId=voiceRecognition_getCMDID block="identify once and save the results"
    export function getCMDID(): void {

    }

    /**
     * 
     */

    //% weight=70
    //% blockId=voiceRecognition_checkCMDID block="recognize it?"
    export function checkCMDID(): boolean {
        return false;
    }

    /**
     * 
     */

    //% weight=65
    //% blockId=voiceRecognition_readCMDID block="get the result"
    export function readCMDID(): number {
        return 100;
    }

    /**
     * 
     */

    //% weight=60
    //% blockId=voiceRecognition_checkWord1 block="word1 %word ID"
    export function checkWord1(word: WakeupWords): number {
        return 100;
    }

    /**
     * 
     */

    //% weight=55
    //% blockId=voiceRecognition_checkWord2 block="word2 %word ID"
    export function checkWord2(word: LearningCommandWords): number {
        return 100;
    }

    /**
     * 
     */

    //% weight=50
    //% blockId=voiceRecognition_checkWord3 block="word3 %word ID"
    export function checkWord3(word: FixedCommandWords): number {
        return 100;
    }

    /**
     * 
     */

    //% weight=45
    //% blockId=voiceRecognition_checkWord4 block="word4 %word ID"
    export function checkWord4(word: LearningRelatedCommands): number {
        return 100;
    }

}