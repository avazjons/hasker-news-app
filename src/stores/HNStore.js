import { makeAutoObservable } from "mobx";
import { getStoryIds } from "../services/hnApi";

class HNStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    storyIds = [];

    saveStoryIds = async () => {
        try {
            this.isLoading = true;
            const result = await getStoryIds();
            if (result === null) return alert("Server error");
            this.storyIds = result.slice(0, 5);
        } finally {
            this.isLoading = false;
        }
    }
}

export const hnStore = new HNStore();