import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { stateAtom, errorAtom } from '../atoms/stateAtom';
import { omit, isEmpty } from 'lodash';

export default function Form1({ handleChange }) {
  const [fields, setFields] = useRecoilState(stateAtom);
  const [error, setError] = useRecoilState(errorAtom);
  const [errors, setErrors] = useState({});
  const handleFieldChange = (e) => {
    const { value } = e.target;
    const name = e.target.attributes.getNamedItem('data-testid').value;
    console.log('Custom Name field: ' + name);
    setFields((previousFields) => ({ ...previousFields, [name]: value }));
    validate(e, name, e.target.value);
  };

  const validate = (event, name, value) => {
    if (name === 'phone') {
      const len = value.length;
      if (len === 0) {
        return setErrors({
          ...errors,
          phone: 'Phone number is a required field',
        });
      } else {
        // Set the error state empty or remove the error for firstname input
        // omit function removes/omits the value from given object and returns a new object
        let newObj = omit(errors, 'phone');
        return setErrors(newObj);
      }
    } else if (name === 'email') {
      if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return setErrors({
          ...errors,
          email: 'Email should have correct format',
        });
      } else {
        let newObj = omit(errors, 'email');
        return setErrors(newObj);
      }
    }
  };

  if (fields.email !== '' && fields.phone !== '' && isEmpty(errors)) {
    setError(false);
  } else {
    setError(true);
  }

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
                Contact details
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter your email address and your phone number.
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
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        * Email
                      </label>
                      <input
                        type="email"
                        data-testid="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                        id="email"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <span className="text-sm text-red-500">
                        {errors.email}
                      </span>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        * Phone
                      </label>
                      <input
                        type="number"
                        value={fields.phone}
                        onChange={handleFieldChange}
                        data-testid="phone"
                        required
                        id="phone"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <span className="text-sm text-red-500">
                        {errors.phone}
                      </span>
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
