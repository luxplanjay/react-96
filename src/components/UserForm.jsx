import { useId } from "react";

export default function UserForm({ onSubmit }) {
  const usernameFieldId = useId();
  const roleFieldId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      username: e.target.elements.username.value,
      role: e.target.elements.role.value,
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={usernameFieldId}>Username:</label>
        <input type="text" name="username" id={usernameFieldId} />
      </div>

      <div>
        <label htmlFor={roleFieldId}>Role:</label>
        <select name="role" id={roleFieldId}>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
