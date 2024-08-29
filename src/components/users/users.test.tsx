import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Users from ".";
import { RootState } from "../../store/store";
import { User } from "../../types/users";

const mockStore = configureStore<Pick<RootState, "users">>([]);

describe("Users Component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      users: {
        users: [],
        loading: false,
        error: null,
      },
    });
    store.dispatch = jest.fn();
  });

  test("renders list of users", () => {
    const users: User[] = [];
    store = mockStore({
      users: {
        users,
        loading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );

    users.forEach((user) => {
      expect(screen.getByText(user.username)).toBeInTheDocument();
    });
  });
});
