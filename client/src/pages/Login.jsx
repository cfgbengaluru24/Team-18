import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="py-16 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-4xl">
        {/* Title and Image Section */}
        <div className="flex flex-col items-center lg:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">
            Exchange Participants Association
          </h1>
          <div
            className="w-full bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPDw4SEBIQERIWERgQEBAQEhAQExIRFhUYFhUWExYYHiggGBolGxUVIjEhJSkrLi4yFx8zODMtNygtLi0BCgoKDg0OGxAQGi0mHyUtLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xAA7EAACAgECBAMECAQFBQAAAAAAAQIDBAURBhIhMRNBUQciYXEUIzJCUoGRoWJyscEVFjOC0UNTY6Lx/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMFAgQGAQf/xAAtEQEAAgIBAwIFBAEFAAAAAAAAAQIDEQQFITESQRMyUWFxFBUiQqEGI4GRsf/aAAwDAQACEQMRAD8AnEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuBTcCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzJpbt7JebY7ERM9nK63x3i4zcYt3TXTlr6pfORBfkVqt+L0XkZo3Maj7mlce4l+ynJ0y9J9Fv8H2FORWTkdF5GLxG4dRTdGaUoyUk+zTTRPvfhVWpas6tGpXAxAAAAAAAAAAAAAAAAAAAAAUYGrzeIMWh7WXVxfpum/0I5yVjzLbxcHPkjdazK5ga1j3/wClbXJ+ikt/0PYvWfDDLxM2L56y2Jm1wDB1fVK8WqVlslGK/Vv0Rja0Vjcp+Px8me/opCIuJ+MrsyTjBuqnsoJ7OS/if9ivy57Wns7TgdIxceN2jdnMmuuIjXYXU9/BOtd3e8F8NZr5bPFsxqu/L3cl/K+iNvDiv5mXM9U5/FjdIrFpSjBbJLffp3fmbseHJTO529not3WxgnKUlFLu5NJL82IiZ7QNNLi/AUuV5VO++32l/Um/TZNb083Db4uVC2KlXOM4vtKLUl+qIprMeXq8eAAAAAAAAAAAAAACjAj/ANpHFEqX9Goe0nHeya7pPskanIza/jDo+idNrl/3skdvZF7e7bffzZo727CKxXx4Vqm4tSi3GS7NdGhEzDG1K2jVoS/7PeJXmVSrte9taXX8cfUsePl9calxHWOnxx7+unyz/h0+oZkKKp2WPaMVu2T2tFY3Kpw4bZbxSsd5QhxPr9mdc5ye0E/q4eSXr8yry5ZvL6BwOBTiY9R592mIlh7MrTtPsybFXTFzk/JeS9W/JGdaTbtCDPyceGnqvOoSxwrwPViKNlu1l3fd9Ywf8K/ub+LBFe8+XGdQ6xk5EzWnarrkbClegLd9yhGUpPaMU5Sfol1YiJmdD56434ut1G6W0nHHi9qq10TX4perL7j8euOv3Q2ttzBtPG64W4lu066M6pPk3+srf2ZR8+nqQZsNckal7EzD6M0vOhkU1XVveM4qS/MoL0mlprKZlGIAAAAAAAAAAAABRgQPxhKTz8rn7+I0t/wrt+xVZvnl9E6VERxq+n6NORLAA672Xya1Dp2dUub5dDZ4vzqLr8RPG7/Vm+0/XvEtWNW/ch1s2fSUvJP5GXJy99Q1+g8H00+NaO8+HCGo6SPpDZaFolubaoVLp96b+zFfEkx45vOmpzObj4tPVae6ZNB4cpw6eSte847Ts+9J/MscWOKOE5nOycq+7T29ocNr+bqeiWc8bJZeI30dq5nD+GT7r5lvirizxqe0q6dw2/DntPxclqF6ePZ6y6wb/m8vzIsvBvT5XsWiXc1WxmlKLUk+qae6ZpTExOpZtLxzKS03NcN+bwZdv3JuNr4kbeW8Pm1HRIQCoE++yaUnpdPNv0lJR3/DzdCi5uvizpLXw7I1GQAAAAAAAAAAAAFGBGPtO4el4n0qqO8WtrUl1TXaXyNHk4u/qh1nQedX0/AvP4R4abqNh6T28pJ4L0t4GLkZty5ZOt+HF91H4/N7G5hp6KzaXJ9T5H6vkV4+PxvujvIulZOc5PeUpOUn8W9zTmdzt1GKkUpFa+IZeiaTZmXRqqXV/al5Rj5tmWOk3nUIeXy6cfHN7Ju4f0WvCpjXWl6yl5yl5tlpjpFI1D5/y+Vfk5JvZtDNqrGZiQurnXZFThJcsovqmme1tNZ3AgLj/hCWnXOUE3jzf1cu/K/wyL3i8mMtdT5Q2jTF4Y4xytPkvDm517+9TPrHb4ehlm41Mkd/JFtJp0HiLG1fHsjF7NwcLapdJR3XX5op8mG+C20sTEoN4p4et0/InVYny7712bPlnHy2fqXWHNGWu4RTGmmJnjP0XSbcy6FNMXKUn1flFebb8jDJkrSszMkRt9I6DpkcTGpoh2hBR39X5v8AU53Jf12myaI02Bg9AAAAAAAAAAAAAAeZwTTT6p9Gn1TD2JmO8Oa1LgXDvk5cjrb7+G+X9iGcFJWmHrPJxRre/wAruk8GYeM1KNfPJdpWPm2Pa4a1YcjqvJzRqbaj7NR7Vczw8SuuPTnns0vwxW//AAR8q2q6bnQMXrzzefaEVUUyslGEE5Sk1GKXm2V8RudQ7PJkrSs2t4hNvB3DscGhJ9bZLeyXnv6L4ItMWOKQ+f8AUudblZd+0eHQIlVyoADA1vSq8yiym1Jxktv5X5NfEzx3mltw8mNvnHiLRbMHJsosXWL92XlKHk0dBiyxkrEwimNMfTNRtxbYW0ycJxe6a8/g15oyvSLxqXkJz4a1rG1zF5b665WR/wBWmXXZ/ij57FLmxX49u3hLE7W5+y/T3Pm5LEt9+VTfKP1uXWj0w6XSNEx8OPLj1QrXm0ur+bIL5bX+aXsRpsSN6AAAAAAAAAAAAAAAAAACKva3kb348N/swb2+LaNHlz3iHX/6dx6xWsyvZfw/3y7F/DSn+8jLjY/7Si6/zp38Ck/lJSNxyqoAAAA4f2pcMLMxXdXHe6pOS27yh3kjc4eeaX9M+JY2jaBy8RNlw9rNmDkV31PrHpJeUovumR5scXp6ZexOn0lpGowyqKrq3vGcFJfDddUc7kp6LTWUsTtmGL0AAAAAAAAAAAAAAAAAKbgV3AirjnCllatTTH70Ip/Bb9WaOevqyRDrulZowcG15SbhYkaa664JKMYqKXwRu1jUacrlyWy3m9vdkHqMAAAAHmWzWz+R5Ej559oug/Qc6xJbV2fWVemz7r8mX/Ey+un4RWju5c2mKWPYrrn+tiTfb6yrf/2S/qVXUMXi8M6SlgrEgAAAAAAAAAAAAAAAAAarV9brxJVq1SUZb7TS3Sa8mT4ePbLH8WlyubTjzHrjyvYer0XJOFsH8N9n+jPL4MlPMM8fMw5I7WhhU6Rvn25UtmvCjXW90/Xm/sasY/57lbTy4njRhrPv3btMkaau4ABuAAtXZEILeUox+bSMq0tbxCO2WlfMtFncXY9b5Yc10+yjWt938zbpwMto3btCvy9Vw0nVe8/ZzvtH0izM053zio21fWRhHq1W/tJvzZnxr1x5fRHht4pvenqv/wAIULhk3fBOc8fUcSae31ig/lLp/cg5FfVjmHseX0mjnkyoAAAAAAAAAAAAAAAABpuKdO+kY1kfvRXPD5rqbXDyzjyxPsr+pceM2CY947oo/Y6btMOI71ll4+qX1/Ytsj/ub/qR24+K3mqanKzU+W0thVxXlx6eJv8AzJMgt0/BPs26dV5FY+bbLjxxlelT/wBr/wCSKel4vunjref7K/55yfw1fozz9rxfWXv75n+kLdnGuU1svDj8VH/lmUdMwx92FutciY7aYV/EmVPvdJfy7RJq8LDH9Wtk6lyLf3YVULsmaiue2T8t3L8/gS2+HhjfhDSM3ItqNzKQeGOGI4yVlm0rdvyh8vj8Si5fNnL/ABr4dR0/pdcEeu3e3/jf5WOrK5wl2lFxfya2NGk+mYmFu+ZNawHi5N9MujhNx/Ly/bY6TFf10iUMwxcefLOD9JJ/o0e2jcTB7vqbDs5qq5esE/1Rzdo1Mp4XjEAAAAAAAAAAAAAAAAFGCe6M+J+H7arrJ1wcqpPmTit9t+6aOg4fMpakVtOpcd1Hp98eWbUrusucZY7iVRMaD14AAPVVbm9opyfok2eWtFe8s60m06iNuk0jg267aVv1UPT77Xy8itz9RpTtTvK34vRsuTU37Q7rS9Jqxo8tUUvWT6yfzZTZuRfLO7S6Xj8TFgjVIZ5C2lQIL9sWn+FqCsS6W1qX+6PR/wBi64F949fRFfysezbhB59ytsW2PXJN/wDkku0V8D3l8iMcajyVhPMIpJJLZJbJLyRSJXoAAAAAAAAAAAAAAAAAAUYGuzdEx7v9SqDfrsk/1RNTk5KeLNPLwcGX5q7ai7gfGf2XZH4J7/1NuvU8sedNG/RMFvG1r/IlH/cs/Yy/dMn0hh+xYvrL1dwzg40XO7dpfjl3+SPI5nIyzqr23TeJx49V/wDLDr4sxKHtTQ0vVKMSWeBnyRu9mvHVOLinWOjdaTxTj5DUd3Cb7Rn03+TNTNwsmON67LHjdUw5u29S3qNNZQqHoBxftD4TlqTw1BqPLY1ZL0ra67fHobfFz/CidsbRt1GladXi0101JRhCKil/d/E1r3m9tyyZhiAAAAAAAAAAAAAAAAC3ddGC3nKMVulvJqK3b2S3fm20vzA9pgVAAAPLEPJRTxRqssnIn19yLcYR8und/mdNwuPGPHE+7iOo8uc2afpHZpzcVwn/APTyYj3e1mYncJP4L1R5GOlN7zh7sn6ryf6HN87B8LJ28S7PpPK+Ni7+YdCaS1AAACk5JJttJJbtvokl5sDxTdGcYyhKMoyW8ZRalGSfZpro0BcAAAAAAAAAAAAABRgRXxPiZWdqFteTGucaJeJi6S5OFefi7OM743NxTujzLaL6QcV+LmYdhouY8W6Gn22W3zVE8mF9iXu46tUIV3T396xb7c33uXr16sOlAAALd8d4yXqmv2Mq9piWGSN0mEL5NbjOafdSafz3OtxzE1iYfPc1ZreYlbM0QePXdezat8t8vLmST/IpeqzG4h0/QYnVpdsVDogABST2Tb6Lu2wOF9peu34sa08WrI066EqMycrfDcfE2hFc32YJp9JP3d2t3HuBpfZHXk0ysx4eKseqyVd9GZCVc6W1zVW48usZKa+1DfZP3ovaS3CVQAAAAAAAAAAAAAAMPUsFXQaUnXYlJVXwjB2UylFxcq+ZNJ7P0AjTUuGMXFyc/K1P6Tm1Qx8eFEsqyVk8i6UrW6q4Q2jL3vDSjtsu/m2wzuBeL7rMnHx7p49njwtsWPTFwu0x08q+j5EX1cdmkpNJ7qXdbbBI9dikt4tNdVummt09n+4HoCgHDcYcMylOV9Ed9+tkF339Ui44PNiI+Hf/ALc11TplptOXHH5hxcoNPZpp+j6FxFomNw521JjyzNL0i3Jko1xe3nJraKXzIc3Jpijctnj8PLmtERCU9G0+ONTCuPkur9ZPuzms2Wct5tLteLx4wY4pDPImyAWM7MroqnbbONdcIuU5ze0YxXdtgcj/AI/HVXfgWY2RRVk4ds8a+zli7qelcp8ifNV1nFrmXVPy7Ac37PdGzbKpct1VOLCX0LJ067nzarLK268px5mnQm0+WCbj57bPYCTtM0+vGpqppi4V1xUK4tylyxXZbybbQGWAAAAAAAAAAAAAAAAs5GLCzl54RnyyVkOeKlyzj9mUd+0l6gcdxxp2dZ4ssfwKqIwjO91zdWXl1x3dtSu5fqVyro+u+66x6gV9mVdWJotN0lCiqaszZpv3aq7JynFOT7qNfKt/4QNrovGONl211QV9crK3dR9IospV9S23nU5LaS6p+uz322A6ABsBYnh1ye8oQb+MUZxkvHiUU4Mc+awuwqUekUkvgtjGZme8s60isaiHrY8ZKgaT/NuF9J+irIqd/N4fhp/9RLfw+b7PP/DvuBwb17Ilgf4nc7sym2FqyNOh9HqxcamL5ZwtlNc8pxW627yk9uiAzuHfZ5UrLvGjbKuPJPTs2OTkV5VeO47LHls04KvbZbdGpdt9wJEooVcVGPZfm2/Nyfdt+bfVgXQAAAAAAAAAAAAAAAAABRrcDR8V6G8rTsjEp8OtyrUKoyTVS5GpRhJR7QfKovZdmBo9Q13IpqV2Zptf0iFqq0ynHu+k2WXzhKEmpKCVVfK+svTfddtw0nDfEV9GPr999ttt1FULZV3xtrhDKlVJ+FVVJJwr5uSK2+0knv1A30OK8nElKvUq6d1gWZ8bMVz2kqIxd1c4S35JJy6NNp/B9AM7C4stsrU3puoLeCmuT6FapJ7bKPLdvvs9+qXZgZPC/E0dShKdeNl0QX2Z5EaYxm1JxlGPJZJ7pxe6ewHPvj+3xYJ41cKZZz03neTGd6yOd1KXgKK3gprd7S7dfgBzmncWZTyMSeVlZNb+m2YmfGVFdWnUcikvDViTl4j3rcZOW3vdWgMqzSMr/CpaOsOyV0bNsfPj4ccZrxfEhlSs5uaM0u6Sbb7b7gdtLgnBeRK90JzlPxpx5rFTO7ffxZU78jnv15mtwOiAAAAAAAAAAAAAAAAAAAAAAAU2A0Ou8J0ZcMlPxK5Xul22VS95vHkpVPlmnHo0vLrstwNNqHA91lOe5Zc8nMuw3g1XZEK64VUS6yio1R+831ls30XoBmcHcPyw7bt8HBxU4RirMK22as2e+04ThHbb16gbDg7S7MTEVVvLzePkWe691y25FlsevryzQGLovCNWNm5+U4UTnferqrHVHxaU64xnFTfXZyTfT1A2NHD+PF5m9anHJn4mRXZtZXOXIoP3JLbqorf1A2VdcYpRilGKW0YxSSSXRJJdkB7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=')",
              height: '300px', // Adjust the height as needed
            }}
          ></div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 lg:w-1/2 mt-8 lg:mt-0">
          <p className="text-xl text-gray-600 text-center mb-8">
            Welcome back!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <a href="#" className="text-xs text-gray-500">Forget Password?</a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" type="submit">
                Login
              </button>
            </div>
          </form>
          
          {/* Sign-up link */}
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
