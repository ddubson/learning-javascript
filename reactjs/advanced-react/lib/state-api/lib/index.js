class StateApi {
  constructor(rawData){
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({searchTerm});
  };

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  };

  getState() {
    return { ...this.data };
  };

  lookupAuthor(authorId) {
    return this.data.authors[authorId];
  }

  subscribe = (callbackFn) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = callbackFn;
    return this.lastSubscriptionId;
  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(callbackFn => callbackFn());
  }
}

export default StateApi;