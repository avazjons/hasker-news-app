import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { hnStore } from '../stores';

const Home = () => {
    const { storyIds, saveStoryIds } = hnStore;

    useEffect(() => {
        saveStoryIds();
    }, [saveStoryIds])

    return (
        <>
            {
                storyIds.map((storyId) => <div key={storyId}>{storyId}</div>)
            }
        </>
    )
}

export default observer(Home);