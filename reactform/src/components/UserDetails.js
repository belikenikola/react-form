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
      case 'name':
        const numbName = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let errName = false;
        for (let i = 0; i < value.length; i++) {
          numbName.forEach((numbName) => {
            if (Number(value[i]) === numbName) {
              errName = true;
            }
          });
        }
        if (errName === true) {
          setErrors({
            ...errors,
            name: 'First name should not contain numbers',
          });
        } else {
          // Set the error state empty or remove the error for firstname input
          // omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, 'name');
          setErrors(newObj);
        }
        break;
      case 'lastname':
        const numbLaName = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let errLaName = false;
        for (let i = 0; i < value.length; i++) {
          numbLaName.forEach((numbLaName) => {
            if (Number(value[i]) === numbLaName) {
              errLaName = true;
            }
          });
        }
        if (errLaName === true) {
          setErrors({
            ...errors,
            lastname: 'Last name should not contain numbers',
          });
        } else {
          // Set the error state empty or remove the error for firstname input
          // omit function removes/omits the value from given object and returns a new objest
          let newObj = omit(errors, 'lastname');
          setErrors(newObj);
        }
        break;
      case 'age':
        if (value <= 0) {
          // We will set the error state
          setErrors({
            ...errors,
            age: 'Age should be positive',
          });
        } else {
          // Set the error state empty or remove the error for firstname input
          // omit function removes/omits the value from given object and returns a new objest
          let newObj = omit(errors, 'age');
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  if (
    fields.name !== '' &&
    fields.lastName !== '' &&
    fields.age >= 0 &&
    isEmpty(errors)
  ) {
    setError(false);
  } else {
    setError(true);
  }

  console.log('State', fields);
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
                User details
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter your first and last name, and your age.
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
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        * First name
                      </label>
                      <input
                        type="text"
                        value={fields.name}
                        onChange={handleFieldChange}
                        data-testid="name"
                        id="name"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <span className="text-sm text-red-500">
                        {errors.name}
                      </span>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        * Last name
                      </label>
                      <input
                        type="text"
                        data-testid="lastname"
                        value={fields.lastname}
                        onChange={handleFieldChange}
                        id="last-name"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <span className="text-sm text-red-500">
                        {errors.lastname}
                      </span>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        data-testid="age"
                        value={fields.age}
                        onChange={handleFieldChange}
                        id="age"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <span className="text-sm text-red-500">{errors.age}</span>
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
