import { makeAutoObservable } from "mobx";
import api from "../api";

class HaskerNewsStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    storyIds = [];

    saveStoryIds = async () => {
        try {
            this.isLoading = true;
            const result = await api.getStoriesIds();
            if (result === null) return alert("Server error");

            this.storyIds = result.slice(0, 5);
        } finally {
            this.isLoading = false;
        }
    }
}

export const haskerNewsStore = new HaskerNewsStore();