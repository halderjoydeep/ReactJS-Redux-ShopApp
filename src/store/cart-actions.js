import { setNotification } from "./ui-slice";
import { replaceCart } from "./cart-slice";

export function fetchCartData() {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-movies-b9f74-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      return responseData;
    };

    await fetchRequest()
      .then((data) => {
        dispatch(
          replaceCart({ items: data.items, totalCount: data.totalCount })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          setNotification({
            status: "error",
            title: "Failed...",
            message: "Something went wrong",
          })
        );
      });
  };
}

export function sendCartData(cart) {
  return async (dispatch) => {
    const sendRequest = async () => {
      dispatch(
        setNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );

      const response = await fetch(
        "https://react-movies-b9f74-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalCount: cart.totalCount,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };

    await sendRequest()
      .then(
        dispatch(
          setNotification({
            status: "success",
            title: "Sent",
            message: "Successfully sent",
          })
        )
      )
      .catch((error) => {
        dispatch(
          setNotification({
            status: "error",
            title: "Failed...",
            message: "Something went wrong",
          })
        );
      });
  };
}
