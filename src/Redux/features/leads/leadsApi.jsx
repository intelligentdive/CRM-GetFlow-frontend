import { api } from '../../api/apiSlice';

const leadsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLeads: builder.query({
      query: () => '/public/fakeData/leads/leads.json',
      providesTags: ['leads'],
    })
  }),
});

export const {
  useGetLeadsQuery
} = leadsApi;
