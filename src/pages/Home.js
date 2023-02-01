import { observer } from 'mobx-react';
import { haskerNewsStore } from '../stores';

const Home = () => {
    const { isLoading, storyIds, saveStoryIds } = haskerNewsStore;
    saveStoryIds();

    //34593535
    return (
        <>
            {
                storyIds.map((storyId) => {
                    return <div key={storyId}>{storyId}</div>
                })
            }
        </>
    )
}

export default observer(Home);