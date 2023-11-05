import { api } from '../../api/apiSlice';

const leadsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLeads: builder.query({
      query: () => '/leads.json',
    })
  }),
});

export const {
  useGetLeadsQuery
} = leadsApi;
