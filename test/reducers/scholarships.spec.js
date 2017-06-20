import { expect } from 'chai';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import reducer, {
  mapStateToProps,
} from 'reducers/scholarships';
import { fetchLatestScholarship } from 'actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Scholarships Reducer', function () {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('returns latest scholarship', function (done) {
    const store = mockStore({});
    const scholarships = [{
      title: 'sample 1',
      description: 'lorem ipsum',
      deadline: 'time',
      eligibility: 'foo',
    },
    {
      title: 'sample 2',
      description: 'lorem ipsum',
      deadline: 'time',
      eligibility: 'foo',
    }];

    store.dispatch(fetchLatestScholarship());

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { scholarships },
      })
      .then(() => {
        expect(reducer({}, store.getActions()[0])).to.deep.equal(
          { latestScholarship: scholarships[1] },
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('mapsStateToProps', function () {
    const state = {
      scholarships: {
        latestScholarship: {
          title: 'sample',
          description: 'description',
          deadline: 'time',
          eligibility: 'foo',
        },
      },
    };

    expect(mapStateToProps(state)).to.deep.equal({
      latestScholarship: state.scholarships.latestScholarship,
    });
  });
});
