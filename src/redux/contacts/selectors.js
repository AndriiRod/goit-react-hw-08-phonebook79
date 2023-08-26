export const selectContacts = state => state.contacts.items;
export const selectStatus = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
export const selectVisibleContact = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);

  if (filter === '') {
    return contacts;
  }
  const formatFilter = filter.toLowerCase().trim();
  return contacts.filter(({ name }) => {
    const formatName = name.toLowerCase().trim();
    return formatName.includes(formatFilter);
  });
};
