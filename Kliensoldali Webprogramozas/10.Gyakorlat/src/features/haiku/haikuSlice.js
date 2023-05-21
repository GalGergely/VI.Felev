import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    editor: "",
    selectedIndex: null,
    haikus: [
        `Téged vártalak
Mint hajnali fényt éjjel
Félve-remálve`,
    ],
}

export const haikuSlice = createSlice({
    name: "haiku",
    initialState,
    reducers: {
        add: (state, { payload: newHaiku }) => {
            state.haikus.push(newHaiku);
        },
        remove: (state, { payload: index }) => {
            state.haikus.splice(index, 1)
        },
        save: (state, { payload: text }) => {
            if (state.selectedIndex !== null) {
                state.haikus[state.selectedIndex] = text;
            }
        },
        select: (state, { payload: index }) => {
            state.selectedIndex = index;
            state.editor = state.haikus[index];
        },
        changeText: (state, { payload: text }) => {
            state.editor = text;
        }
    }
});

export const { changeText, select, add, save, remove } = haikuSlice.actions;
export const haikuReducer = haikuSlice.reducer;

function numberOfVowels(row) {
    const vowels = "aeiuoáéíúóöüőúű";
    characterCounter = 0
    vowels.forEach(wow => {
        row.toLowerCase().forEach(character => {
            if (wow == character) {
                characterCounter++;
            }
        });

    });
    return characterCounter;
}
export const selectEditedText = (state) => {
    const text = state.editor;
    const rows = text.split("\n");
    const vowelsPerRow = rows.map(numberOfVowels);
    const isHaiku = vowelsPerRow.length === 3 && vowelsPerRow[0] === 5 && vowelsPerRow[1] === 7 && vowelsPerRow[2] === 5
    return { text, isHaiku, vowelsPerRow };
}

export const selectHaikus = (state) => state.haikus;
export const selectStateIndex = (state) => state.selectedIndex;