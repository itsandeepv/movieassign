
export const searchAction = (value) => ({
    type: "Search",
    payload: value,
});

export const addfilter = (data) => ({
    type: "addfilter",
    payload: data,
});
export const removefilter = (data) => ({
    type: "removeFilter",
    payload: data,
});


