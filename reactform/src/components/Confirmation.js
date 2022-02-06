import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { errorAtom, stateAtom } from '../atoms/stateAtom';
import { omit, isEmpty } from 'lodash';

export default function UserDetails(handleChange) {
  const [fields, setFields] = useRecoilState(stateAtom);
  const [error, setError] = useRecoilState(errorAtom);
  const [errors, setErrors] = useState({});
  const handleFieldChange = (e) => {
    const { value } = e.target;
    const name = e.target.attributes.getNamedItem('data-testid').value;
    console.log('Custom Name field: ' + name);
    setFields((previousFields) => ({ ...previousFields, [name]: value }));
    validate(e, name, value);
  };
  const validate = (event, name, value) => {
    console.log(name, value); // A function to validate each input values

    switch (name) {
      case 'seat':
        const lenSea = value.length;
        if (lenSea === 0) {
          setErrors({
            ...errors,
            seat: 'Seat is a required field',
          });
        } else {
          // Set the error state empty or remove the error for firstname input
          // omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, 'seat');
          setErrors(newObj);
        }
        break;
      case 'food':
        const lenFoo = value.length;
        if (lenFoo === 0) {
          setErrors({
            ...errors,
            food: 'Food is a required field',
          });
        } else {
          // Set the error state empty or remove the error for firstname input
          // omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, 'food');
          setErrors(newObj);
        }
        break;
      case 'allergies':
        const lenAll = value.length;
        if (lenAll === 0) {
          setErrors({
            ...errors,
            allergies: 'Allergies is a required field',
          });
        } else {
          // Set the error state empty or remove the error for firstname input
          // omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, 'allergies');
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Confirmation
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This is list for confirmation.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        disabled
                        value={fields.name}
                        type="text"
                        data-testid="name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        disabled
                        value={fields.lastname}
                        type="text"
                        data-testid="lastname"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Age"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Age
                      </label>
                      <input
                        disabled
                        value={fields.age}
                        type="number"
                        data-testid="age"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        disabled
                        value={fields.email}
                        type="email"
                        data-testid="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        disabled
                        value={fields.phone}
                        type="number"
                        data-testid="phone"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="seat"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Seat
                      </label>
                      <input
                        disabled
                        value={fields.seat}
                        type="text"
                        data-testid="seat"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="food"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Food
                      </label>
                      <input
                        disabled
                        value={fields.food}
                        type="text"
                        data-testid="food"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="allergies"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Allergies
                      </label>
                      <input
                        disabled
                        value={fields.allergies}
                        type="text"
                        data-testid="allergies"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
